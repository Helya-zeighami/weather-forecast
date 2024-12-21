import React, { useState } from "react";
import {
  MantineProvider,
  Container,
  Space,
  Button,
  SegmentedControl,
} from "@mantine/core";
import useGeolocation from "./hooks/useGeolocation";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const { location, error } = useGeolocation();
  const [customCity, setCustomCity] = useState(null);
  const [showForecast, setShowForecast] = useState(true);
  const [refreshWeather, setRefreshWeather] = useState(false);
  const [unit, setUnit] = useState("C");

  const handleSearch = (cityName) => {
    setCustomCity(cityName);
  };

  const handleRefreshWeather = () => {
    setRefreshWeather(!refreshWeather);
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white p-5 font-sans">
        <SearchBar onSearch={handleSearch} />
        <Space h="md" />

        {error && <h3 className="text-center text-red-500">{error}</h3>}

        <div className="flex justify-center mb-4">
          <SegmentedControl
            value={unit}
            onChange={setUnit}
            data={[
              { label: "°C", value: "C" },
              { label: "°F", value: "F" },
            ]}
            size="md"
            radius="md"
          />
        </div>

        <CurrentWeather
          location={location}
          customCity={customCity}
          refresh={refreshWeather}
          unit={unit}
        />
        <Space h="md" />

        <div className="flex justify-center gap-4 mb-4">
          <Button
            onClick={handleRefreshWeather}
            size="md"
            radius="md"
            className="bg-gradient-to-r from-green-500 to-green-700 h-9 rounded-lg hover:from-green-700 hover:to-green-900 text-white"
          >
            Refresh Current Weather
          </Button>

          <Button
            onClick={() => setShowForecast(!showForecast)}
            size="md"
            radius="md"
            className="bg-gradient-to-r h-9 rounded-lg from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white"
          >
            {showForecast ? "Hide 7-Day Forecast" : "Show 7-Day Forecast"}
          </Button>
        </div>

        {showForecast && (
          <div className="mt-6">
            <Forecast location={location} customCity={customCity} unit={unit} />
          </div>
        )}
      </div>
    </MantineProvider>
  );
}

export default App;
