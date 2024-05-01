"use client"
import React, { useState, useEffect } from 'react';

const FlagDisplay = () => {
  const [countryName, setCountryName] = useState('');
  const [flagURL, setFlagURL] = useState('');


    const fetchCountryData = async () => {
      try {
        // Fetch user's IP address
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;
 
        const countryResponse = await fetch(`https://hns8ymjw7i.execute-api.us-east-1.amazonaws.com/geolocation?ip=${ipAddress}`);
        const countryData = await countryResponse.json();
        const country = countryData.country;
        console.log(countryData)  
        setCountryName(country);
        // Set the country name state
        const flag = (`https://flagcdn.com/48x36/${country.toLowerCase()}.png`);
        setFlagURL(flag);
      } catch (error) {
        const flag = (`https://flagcdn.com/48x36/us.png`);
        setFlagURL(flag);
        setCountryName("United States");
        console.error('Error fetching data:', error);
      }
    };

    


  return (
    <div>
     
        <div>
          <button onClick={()=>{fetchCountryData()}}>Click me</button>
          {countryName &&
          <div>
          <h2>Your Country: {countryName}</h2>
          <img src={flagURL} alt={`${countryName} Flag`} />

          </div> }
        </div>
     
    </div>
  );
};

export default FlagDisplay;