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
        "x-rapidapi-key": "ad5f1ce61bmsh9435a30e97130f8p1c386bjsnf7a39e64e71d",
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
