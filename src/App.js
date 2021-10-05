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
  const [filterPlaces, setFilterPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const {
        coords: { latitude, longitude },
      } = data;
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((p) => p.name && p.num_reviews));
        setFilterPlaces([]);
        setRating(0);

        setIsLoading(false);
        // console.log({bounds})
        // console.log({places})
      });
    }
  }, [bounds, type]);
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilterPlaces(filteredPlaces);
  }, [rating]);
  //return jsx
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} sytle={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filterPlaces.length ? filterPlaces : places}
            childClicked={childClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            isLoading={isLoading}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filterPlaces.length ? filterPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
