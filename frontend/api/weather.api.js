import { BASE_URL } from '../config';

export const getWeather = async () => {
    const res = await fetch(`${BASE_URL}/weather`);
    return await res.json();
};