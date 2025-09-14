Weather App

A simple and responsive Weather App that shows real-time weather data using a public API. Built with react

🚀 Features

🔍 Search weather by city name
🌡️ Displays current temperature, humidity, wind speed, and weather description
🌍 Supports multiple countries/cities
📱 Mobile responsive UI
🌤️ Weather icons and condition updates in real-time
🛠️ Tech Stack
Frontend: [HTML, CSS, JavaScript] (or React, Vue, etc.)
API: [OpenWeatherMap API / WeatherAPI / other]
Other tools: [Optional – Tailwind, Bootstrap, etc.]

📦 Installation

Clone the repository:
git clone https://github.com/yourusername/weather-app.git
cd weather-app
Install dependencies (if applicable):
npm install
Get your API key:
Sign up at OpenWeatherMap (or your chosen API provider).
Create an API key and copy it.
Add your API key:
If using environment variables, create a .env file in the root
directory:
VITE_API_KEY=your_api_key_here
Or, insert the key directly in your config file (not recommended for production):
const API_KEY = "your_api_key_here";
Run the app locally:
npm run dev

📸 Screenshots

📁 Project Structure
weather-app/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ ├── App.js
│ └── styles.css
├── .env
├── package.json
└── README.md

🔐 Environment Variables
Variable Description
API_KEY Your weather API key

❓ How It Works

User enters a city name in the search box
The app makes a request to the weather API
The response is parsed and displayed in the UI with real-time data
