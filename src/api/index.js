import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        limit: "20",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
      },
    };
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const options = {
      params: {
        lat: lat,
        lon: lng,
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
      },
    };
    const URL = "https://community-open-weather-map.p.rapidapi.com/weather";
    const { data } = await axios.get(URL, options);
   return data;
  } catch (error) {
    console.log(error.message);
  }
};
 