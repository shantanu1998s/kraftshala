// src/WeatherCard.js
import React from 'react';
import '../index.css'

function WeatherCard({ data }) {
  //const { name, main: { temp, humidity }, weather, wind: { speed } } = data;
   console.log(data)

  return (
    <div className="weather-card">
    
    <h3  >{data[0].location.name}</h3>
    <p style={{ marginTop: '5px' }}>{data[0].location.localtime}</p>
    <p style={{ marginTop: '5px' }}>Temperature: {data[0].current.temp_c}°C</p>
    <p style={{ marginTop: '5px' }}>Humidity: {data[0].current.humidity}%</p>
    <p style={{ marginTop: '5px' }}>Wind Speed: {data[0].current.wind_kph} kph</p>
    <p style={{ marginTop: '5px' }}>Description: {data[0].current.wind_kph}</p>
    </div>
  );
}

export default WeatherCard;
