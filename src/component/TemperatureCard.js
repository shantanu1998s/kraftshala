import React from 'react'
import '../index.css'

const TemperatureCard = ({data}) => {
  return (
    <div>
       <h1>{data} °C</h1>
    </div>
  )
}

export default TemperatureCard
