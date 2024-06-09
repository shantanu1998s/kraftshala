// src/WeatherCard.js
import React from "react";
import "../index.css";
import TemperatureCard from "./TemperatureCard";

function WeatherCard({ data, mode }) {
  const { name, country, region, tz_id, localtime } = data[0].location;
  const {
    temp_c,
    temp_f,
    humidity,
    wind_kph,
    condition,
    heatindex_c,
    heatindex_f,
  } = data[0].current;
  console.log(data);

  return (
    <div className="wheatherCard-container">
      <div className=   {mode?"tempCard-Container-inDarkMode":"tempCard-Container-inLightMode"}>
        <TemperatureCard data={temp_c}/>
      </div>
      <div className= {mode?"wheatherCard-inDarkMode":"wheatherCard-inLightMode"}>
        <h3>
          {name} ({country}, {region})
        </h3>
        <h3 style={{ marginTop: "5px" }}>{tz_id}</h3>
        <p style={{ marginTop: "10px" }}>{localtime}</p>
        <p style={{ marginTop: "10px" }}>Temperature: {temp_c}°C</p>
        <p style={{ marginTop: "10px" }}>Temperature: {temp_f}°F</p>
        <p style={{ marginTop: "10px" }}>Humidity: {humidity}%</p>
        <p style={{ marginTop: "10px" }}>Wind Speed: {wind_kph} kph</p>
        <p style={{ marginTop: "10px" }}>Condition: {condition.text}</p>
        <p style={{ marginTop: "10px" }}>HeatIndex: {heatindex_c}°C</p>
        <p style={{ marginTop: "10px" }}>HeatIndex: {heatindex_f}°F</p>
      </div>
    </div>
  );
}

export default WeatherCard;
