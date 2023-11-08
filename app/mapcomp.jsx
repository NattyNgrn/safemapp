"use client"
/*global google*/

import "./map/map.css"
import { GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import { useState, useRef, useCallback, useMemo } from "react";

function Map2(){

  // async function getplace(){
  //   const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${userAddress}&query=${userSearch}&radius=1500&key=${process.env.NEXT_PUBLIC_API_KEY}`)
  //   const data = await response.json()
  //   console.log(data)
  //   return data;
  // }



  const center = {
    lat: 43.6532,
    lng: -79.3832,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  // 
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY
  });
  
  
  const onMapClick = useCallback((e) => {
    setMarker(
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    );
  }, []);

  
  
  if (isLoaded)
  return(
    <GoogleMap
        id="map"
        mapContainerClassName="map-container"
        zoom={8}
        center={center}
        onClick={onMapClick}
        
      >
        {marker ? 
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          /> :
          <div></div>
        }

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(false);
            }}
          >
          <h2>hello meow</h2></InfoWindow>
        ) : null}
      </GoogleMap>
  )
}

export default Map2;