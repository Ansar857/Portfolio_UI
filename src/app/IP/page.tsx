"use client"
import React, { useState, useEffect } from 'react';
import { awsRegionsData } from './country';

interface CountryData {
  region: string;
  countryCode: string;
}

const FlagDisplay: React.FC = () => {
  const [countryName, setCountryName] = useState<string>('');
  const [flagURL, setFlagURL] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [awsRegions, setAwsRegions] = useState<{ [key: string]: CountryData }>({});

  useEffect(() => {
    fetchCountryData();
    setAwsRegions(awsRegionsData);
  }, []);

  useEffect(() => {
    if (selectedCountry && awsRegions[selectedCountry]) {
      const countryCode = awsRegions[selectedCountry]?.countryCode.toLowerCase();
      const flag = countryCode ? `https://flagcdn.com/48x36/${countryCode}.png` : '';
      setFlagURL(flag);
    }
  }, [selectedCountry, awsRegions]);

  const fetchCountryData = async () => {
    try {
      // Fetch user's IP address
      const response = await fetch('https://api64.ipify.org?format=json');
      const data = await response.json();
      const countryResponse = await fetch(`https://hns8ymjw7i.execute-api.us-east-1.amazonaws.com/geolocation?ip=${data.ip}`);
      const countryData = await countryResponse.json();
      const flag = `https://flagcdn.com/48x36/${countryData.country.toLowerCase()}.png`;
      setFlagURL(flag);
      setCountryName(countryData.country);
      setSelectedCountry(countryData.country);
    } catch (error) {
      const flag = (`https://flagcdn.com/48x36/us.png`);
      setFlagURL(flag);
      setCountryName("United States");
      setSelectedCountry("United States");
      console.error('Error fetching data:', error);
    }
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setCountryName(selectedCountry);
    setSelectedCountry(selectedCountry);
  };

  return (
    <div>
      <div>
        <select value={selectedCountry} onChange={handleCountryChange}>
          {Object.keys(awsRegions).map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        {countryName &&
          <div>
            <h2>Your Country: {countryName}</h2>
            <img src={flagURL} alt={`${countryName} Flag`} />
          </div>
        }
      </div>
    </div>
  );
};

export default FlagDisplay;
