import { BASE_URL } from '../config';

export const getFleets = async (desde, hasta) => {
    const APIFLEETS = `${BASE_URL}/fleet?x0=`+desde+'&n='+hasta;
    const res = await fetch(APIFLEETS);
    return await res.json();
};