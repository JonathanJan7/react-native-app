
export const BASE_URL = 'http://192.168.0.43:3000/api';
//const APIFLEETS = 'http://192.168.0.43:3000/api/fleet?x0=0&n=4';
const APICOURSES = `${BASE_URL}/courses`;
const APITRAYECTORY = `${BASE_URL}/trajectory`;
//const APINEWS = 'http://192.168.0.43:3000/api/news?x0=1&n=10';

//Consulto la API para Fleets
export const getFleets = async (desde, hasta) => {
    const APIFLEETS = `${BASE_URL}/fleet?x0=`+desde+'&n='+hasta;
    const res = await fetch(APIFLEETS);
    return await res.json();
};

//Consulto la API para Cursos
export const getCourses = async () => {
    const res = await fetch(APICOURSES);
    return await res.json();
};



//Consulto la API para Cursos
export const getTrajectories = async () => {
    const res = await fetch(APITRAYECTORY);
    return await res.json();
};

export const getWeather = async () => {
    const res = await fetch(`${BASE_URL}/weather`);
    return await res.json();
};

// ========================= Noticias =========================
export const getNews = async (desde, hasta) => {
    const APINEWS = `${BASE_URL}/news?x0=`+desde+'&n='+hasta;
    const res = await fetch(APINEWS);
    return await res.json();
};

export const deleteNews = async (id) => {
    const res = await fetch(`${BASE_URL}/news/${id}`, {
        method: 'DELETE',
    });
    return res;
};