import { BASE_URL } from '../config';

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

export const createNews = async (news) => {
    const res = await fetch(`${BASE_URL}/news`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(news),
    });
    return res;
}