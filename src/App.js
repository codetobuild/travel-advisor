import "./App.css";
import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api/index";

import Header from "./components/Header/Header";

import Map from "./components/Map/Map";
import List from "./components/List/List";

// component
function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const {
        coords: { latitude, longitude },
      } = data;
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
      });
    }
  }, [bounds, coordinates]); 

  //return jsx
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sytle={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
