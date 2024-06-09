# Weather App

## Description
A user-friendly weather application that provides current weather information based on user input. It includes dark mode and the ability to display weather for multiple locations.

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```sh
  run-> npm install
4. For Start 
  run-> npm start


  ## Features
  1. Search Weather by City: Users can enter the name of a city to get current weather information.
  2. Dark Mode: Toggle between light and dark themes for better user experience.
  3. Weather Information Display: Displays current weather information using a weather card.
  4. Simmer UI: Shows a loading shimmer effect while fetching weather data.

## Technologies Used
  1. React: JavaScript library for building user interfaces.
  2. Axios: HTTP client for making requests to the weather API.
  3. CSS: Styling the application.
  4. WeatherAPI: External API for fetching current weather data.


 ## Set Up API Key

  1. Create a file named constant.js inside the util directory.
  2. Add your WeatherAPI key to constant.js


  ## Usage

  1. Open the Application: Open your browser and navigate to http://localhost:3000.
  2. Search for Weather: Enter the name of a city in the search bar and click the "Search" button.
  3. Toggle Dark Mode: Click the "Dark Mode" button to switch between light and dark themes.

 ## Components
  * App: Main component that includes the search bar, weather display, and dark mode toggle.
  * WeatherCard: Displays the weather information for the searched city.
  * Footer: Simple footer component.
  * SimmerUI: Loading shimmer effect component shown while fetching data.


  ## Acknowledgements
   * [WeatherAPI](https://www.weatherapi.com/) for providing the weather data API.
   * Axios for simplifying HTTP requests.