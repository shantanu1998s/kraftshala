import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './component/WeatherCard';
import './index.css';
import Footer from './component/Footer';
import SimmerUI from './component/SimmerUI';

const apiKey = '94661b376ae74781a52135140240806'; 

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`);
      setWeatherData([response.data]);
    } catch (error) {
      alert('City not found. Please try again.');
    }
  };

  console.log(weatherData)

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div class='main-container'>
    <header class={darkMode ? 'header-dark' : 'header-light'}>
        <h1 style={{marginLeft:'5px'}}>Weather App</h1>
        <button class="dark-mode-btn" onClick={toggleTheme}>{darkMode?"Dark Mode": "Light Mode"}</button>
      </header>
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city or zip code"
        />
        <button class="search" onClick={fetchWeather}>Search</button>
      </div>
      <div className="weather-container">
        {  weatherData.length>0?<WeatherCard data={weatherData} />:(<SimmerUI/>)}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
