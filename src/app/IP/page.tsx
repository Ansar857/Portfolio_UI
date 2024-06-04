"use client";
import React, { useState, useEffect } from "react";
import { awsRegionsData ,timezoneData } from "./country";
import { Box, Center, Image, Select } from "@chakra-ui/react";

interface CountryData {
  region: string;
  countryCode: string;
}

const FlagDisplay: React.FC = () => {
  // const [countryName, setCountryName] = useState<string>('');
  const [flagURL, setFlagURL] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [awsRegions, setAwsRegions] = useState<{ [key: string]: CountryData }>(
    {}
  );

  useEffect(() => {
    fetchCountryData();
    setAwsRegions(awsRegionsData);
  }, []);

  useEffect(() => {
    if (selectedCountry && awsRegions[selectedCountry]) {
      const countryCode =
        awsRegions[selectedCountry]?.countryCode.toLowerCase();
      const flag = countryCode
        ? `https://flagcdn.com/48x36/${countryCode}.png`
        : "";
      setFlagURL(flag);
    }
  }, [selectedCountry, awsRegions]);

  const fetchCountryData = async () => {
    try {
      // Fetch user's IP address
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      const countryResponse = await fetch(
        `https://hns8ymjw7i.execute-api.us-east-1.amazonaws.com/geolocation?ip=${data.ip}`
      );
      const countryData = await countryResponse.json();
      const flag = `https://flagcdn.com/48x36/${countryData.country.toLowerCase()}.png`;
      setFlagURL(flag);
      // setCountryName(countryData.country);

      const count = Object.keys(timezoneData) 
      const value = Object.values(timezoneData)
      // const ind = value.findIndex(entry => entry. === "CA");
      console.log('timezones ', count[20]) 
      console.log('countries ', value)




      const country = Object.keys(awsRegionsData) 
      const values = Object.values(awsRegionsData)
      const index = values.findIndex(entry => entry.countryCode === "CA");
      console.log('values ', country[index]) 
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryData.country}`
      );
      const name = await res.json();
      const fullName = name[0].name["common"];
      console.log(fullName);
      setSelectedCountry(fullName); // Set initial selected country
    } catch (error) {
      const flag = `https://flagcdn.com/48x36/us.png`;
      setFlagURL(flag);
      // setCountryName("United States");
      setSelectedCountry("United States"); // Set initial selected country
      console.error("Error fetching data:", error);
    }
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
  };

  return (
    <Center
      flexDir={"row"}
      gap={"20px"}
      pt={"70px"}>
        <Box>
          <Select
          w={"15%"}
          h={"36px"}
          bgImage={flagURL}
          variant=''
            placeholder= " "
            icon={<Box />}
            onChange={handleCountryChange}
          >
            {Object.keys(awsRegions).map((country) => (
              <option  value={country}>
                {country}
              </option>
            ))}
          </Select>
        </Box>
    </Center>
  );
  
  
};

export default FlagDisplay;
