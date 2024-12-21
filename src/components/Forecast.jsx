import React, { useEffect, useState } from 'react';
import { fetchForecast } from '../services/weatherService';
import {Loader, Card, Title, Text, Image, Stack, Flex} from '@mantine/core';
import dayjs from 'dayjs';

const Forecast = ({ location, customCity, unit }) => {
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadForecast = async () => {
        setLoading(true);
        try {
            const data = await fetchForecast({
                lat: location?.lat,
                lon: location?.lon,
                city: customCity,
            });
            setForecast(data);
        } catch (error) {
            console.error('Failed to load forecast:', error);
        }
        setLoading(false);
    };

    const convertTemperature = (temp) => {
        return unit === 'F' ? (temp * 9) / 5 + 32 : temp;
    };

    useEffect(() => {
        if (location || customCity) loadForecast();
    }, [location, customCity]);

    if (loading) return <Loader className="text-center" />;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {forecast.map((day) => (
                <Card
                    key={day.datetime}
                    shadow="md"

                    radius="md"
                    className="glassmorphism text-white text-center flex justify-center"

                >
                    <Flex align="center" justify='center'>
                        <Title order={4}>{dayjs(day.datetime).format('ddd')}</Title>
                        <Image
                            src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
                            alt="weather icon"
                            className='ml-7'
                            width={50}
                            height={50}
                        />
                        <Text size="lg">
                            {convertTemperature(day.temp)}°{unit}
                        </Text>
                        <Text size="sm">{day.weather.description}</Text>
                    </Flex>
                </Card>
            ))}
        </div>
    );
};

export default Forecast;
