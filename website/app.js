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

// Event listener to add function to existing HTML DOM element


/* Function called by event listener */


/* Function to GET Web API Data */


/* Function to POST data */


/* Function to GET Project Data */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;
