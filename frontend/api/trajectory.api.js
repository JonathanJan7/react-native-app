import { BASE_URL } from "../config";

const API_TRAJECTORY = `${BASE_URL}/trajectory`;

export const getTrajectories = async () => {
    const res = await fetch(API_TRAJECTORY);
    return await res.json();
};