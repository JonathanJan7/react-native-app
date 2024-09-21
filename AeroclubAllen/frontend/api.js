
const APIFLEETS = 'http://192.168.0.43:3000/api/fleet?x0=0&n=4';

export const getFleets = async () => {
    const res = await fetch(APIFLEETS);
    return await res.json();
};