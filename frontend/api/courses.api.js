import { BASE_URL } from '../config';

const API_COURSES = `${BASE_URL}/courses`;

export const getCourses = async () => {
    const res = await fetch(API_COURSES);
    return await res.json();
};