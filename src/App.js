import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './component/WeatherCard';
import './index.css';
import Footer from './component/Footer';
import SimmerUI from './component/SimmerUI';
import { apiKey } from './util/constant';

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
      <div class={darkMode? 'search-container-in-darkMode':"search-container-in-light-mode"}>
        <input
        className='search-input'
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter City Name"
        />
        <button class="search-btn" onClick={fetchWeather}>Search</button>
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
