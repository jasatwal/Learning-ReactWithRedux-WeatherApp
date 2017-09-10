import axios from "axios";

const API_KEY = "d7d788045b2c17fc0d324dd356461dcb";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},gb`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        // redux-promise will resolve this promise for us automatically.
        payload: request
    };
}