// constants and personal API Key for OpenWeatherMap API
const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&';
const API_KEY = 'ABC';
const KEY_PARAM = `&key=&APPID=${API_KEY}`;

// global variables
let counterId = 1;

/**
 * Gets weather data from OpenWeatherMap through an API for a given zip code.
 * @return
 * @param zipcode
 * @returns {Promise<any>}
 */
const getWeatherData = async function (zipcode = 94040) {
  try {
    // construct URL
    const url = `${WEATHER_API_BASE_URL}zip=${zipcode},us${KEY_PARAM}`;

    // call weather API
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(`An error occurred while retrieving weather data: ${err}`);
  }
};

/**
 * Posts and entry of data to server.
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
const postData = async function (url = '/add', data = {}) {
  // console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    // console.log(newData);
    return newData;
  } catch (error) {
    console.log(`Error occurred while posting to server: ${error}`);
  }
};

/**
 * Gets the most recent entry from the server from given id.
 * @param id
 * @returns {Promise<any>}
 */
const getEntry = async function (id) {
  try {
    // call weather API
    const res = await fetch(`/entry/${id}`);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(`Error occurred while getting entry from server: ${error}`);
  }
};



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;
