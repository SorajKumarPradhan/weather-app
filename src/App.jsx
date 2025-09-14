import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_APP_WEATHER_API
        }&q=london&aqi=yes`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //events
  const inputSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const textSearch = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_APP_WEATHER_API
        }&q=${searchValue}&aqi=yes`
      )
      .then((data) => {
        console.log(data.data);
        setWeather(data.data);
      });
  };

  return (
    <div>
      <div
        style={{
          background: "gray",
          color: "white",
          padding: "2rem",
          width: "20%",
          borderRadius: "2rem",
        }}
        className="searchInput"
      >
        <input
          style={{
            width: "100%",
            padding: "0.5rem 0.5rem",
            fontSize: "1.3rem",
            borderRadius: "0.5rem",
          }}
          onChange={inputSearch}
          type="text"
        />
        <button
          onClick={textSearch}
          style={{
            padding: "0.3rem 2rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            width: "50%",
            background: "blue",
            color: "white",
          }}
        >
          Search
        </button>
      </div>
      {weather && (
        <div className="main">
          <div
            style={{
              background: "gray",
              color: "white",
              padding: "2rem",
              width: "20%",
              borderRadius: "2rem",
            }}
            className="loc"
          >
            <h1>Location: {weather.location.name}</h1>
            <h2>City: {weather.location.region}</h2>
          </div>
          <div
            style={{
              background: "black",
              color: "white",
              padding: "2rem",
              width: "20%",
              borderRadius: "2rem",
            }}
            className="weather-condition"
          >
            <h2>Condition: {weather.current.condition.text}</h2>
            <img src={weather.current.condition.icon} alt="" />
          </div>
          <div
            style={{
              background: "green",
              color: "white",
              padding: "2rem",
              width: "20%",
              borderRadius: "2rem",
            }}
            className="temp"
          >
            <h2>Temperature: {weather.current.temp_c}ºC</h2>
            <h2>Date: {weather.location.localtime}</h2>
            <h2>soraj kumar</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
