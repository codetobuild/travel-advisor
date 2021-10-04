import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import locationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const { coordinates, setCoordinates, setBounds } = props;
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
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw, })
        }}
        onChildClick={""}></GoogleMapReact>
    </div>
  );
};

export default Map;
