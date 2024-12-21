import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCurrentWeather = async ({ lat, lon, city }) => {
    try {
        const url = city
            ? `${BASE_URL}/current?city=${city}&key=${API_KEY}&units=M`
            : `${BASE_URL}/current?lat=${lat}&lon=${lon}&key=${API_KEY}&units=M`;

        const response = await axios.get(url);
        return response.data.data[0];
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error;
    }
};

export const fetchForecast = async ({ lat, lon, city }) => {
    try {
        const url = city
            ? `${BASE_URL}/forecast/daily?city=${city}&key=${API_KEY}&units=M`
            : `${BASE_URL}/forecast/daily?lat=${lat}&lon=${lon}&key=${API_KEY}&units=M`;

        const response = await axios.get(url);
        return response.data.data.slice(0, 7);
    } catch (error) {
        console.error('Error fetching forecast:', error);
        throw error;
    }
};
