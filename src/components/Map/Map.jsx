import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import locationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const Map = (props) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const { coordinates, setCoordinates, setBounds, places, setChildClicked } =
    props;
  const defaultCoordinatesCenter = {
    lat: 51.52916233953459,
    lng: -0.12634438123200065,
  };

  // return jsx
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBmNFFRjp8LTwDYl9jYW8djaZqtZHM-GmY" }}
        defaultCenter={defaultCoordinatesCenter}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}>
        {places?.map((place) => (
          <div
            className={classes.mapContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}>
            {!isDesktop ? (
              <locationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom>
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.medium.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
