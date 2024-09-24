
const APIFLEETS = 'http://192.168.0.43:3000/api/fleet?x0=0&n=4';
const APICOURSES = 'http://192.168.0.43:3000/api/courses';
const APINEWS = 'http://192.168.0.43:3000/api/news?x0=1&n=10';

//Consulto la API para Fleets
export const getFleets = async () => {
    const res = await fetch(APIFLEETS);
    return await res.json();
};

//Consulto la API para Cursos
export const getCourses = async () => {
    const res = await fetch(APICOURSES);
    return await res.json();
};

//Consulto la API para Noticias
export const getNews = async () => {
    const res = await fetch(APINEWS);
    return await res.json();
};