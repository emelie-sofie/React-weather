import axios from 'axios';

const API_KEY = 'c1ecf06808c71fcb2c0c0b08b3b9152e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  //const appid = `&appid=${API_KEY}`;
  //const url = `${ROOT_URL}?q=${city},se` + "&mode=json" + appid;

  const url = `${ROOT_URL}&q=${city},se`
  const request = axios.get(url);

  console.log('Request:',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
