import Search from "./components/Search";
import CurrentWeather from "./components/current-weather/current-weather";
import {WEATHER_API_KEY, WEATHER_API_URL} from "./Api";
import {useState} from "react";

function App() {
    const[currentWeather, setCurrentWeather] = useState(null);
    const[forecast, setForecast] = useState();

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&lang=ru&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async(response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({city: searchData.label, ...weatherResponse});
                setForecast({city: searchData.label, ...forecastResponse});
            })
            .catch((err) => console.log(err))

    }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  );
}

export default App;
