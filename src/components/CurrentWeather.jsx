import React, { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../services/weatherService";
import { Loader, Title, Text, Image, Stack, Group } from "@mantine/core";

const CurrentWeather = ({ location, customCity, refresh, unit }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadWeather = async () => {
    setLoading(true);
    try {
      const data = await fetchCurrentWeather({
        lat: location?.lat,
        lon: location?.lon,
        city: customCity,
      });
      setWeather(data);
    } catch (error) {
      console.error("Failed to load weather:", error);
    }
    setLoading(false);
  };

  const convertTemperature = (temp) => {
    return unit === "F" ? (temp * 9) / 5 + 32 : temp;
  };

  useEffect(() => {
    if (location || customCity) loadWeather();
  }, [location, customCity, refresh]);

  if (loading) return <Loader className="text-center" />;

  return (
    <div className="glassmorphism p-6 rounded-lg shadow-lg text-center mb-8">
      <Title order={1} className="text-4xl font-bold">
        {weather.city_name}
      </Title>
      <Text size="lg" className="text-lg">
        {weather.weather.description}
      </Text>
      <Text size="100px" className="text-8xl font-bold my-4">
        {convertTemperature(weather.temp)}°{unit}
      </Text>

      <Group position="apart" className="mt-4 text-lg">
        <Text>Humidity: {weather.rh}%</Text>
        <Text>Wind: {weather.wind_spd} m/s</Text>
      </Group>
      <Group position="apart" className="mt-4 text-lg">
        <Text>Sunrise: {weather.sunrise}</Text>
        <Text>Sunset: {weather.sunset}</Text>
      </Group>
    </div>
  );
};

export default CurrentWeather;
