'use client'
import { GoogleMap, MarkerF, useLoadScript, InfoWindowF} from "@react-google-maps/api";
import "./map.css"
import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import { getIndividual } from "../serveractions";
import { useAuth } from "@clerk/nextjs";

function Map() {
  

  const [marker, setMarker] = useState(null);
  const [selected, setSelected] = useState(null);
  const [placeInfo, setPlaceInfo] = useState("");

  useEffect(() => {
    if (selected) {
      // call the places api
      // async function calls the api with selected.lat, selected.lng
      // then(setPlaceInfo({whatever info you want}))
      async function getPlacesInfo() {
        const latlng = { latitude: marker.lat, longitude: marker.lng };
        const response = await fetch(
          `https://places.googleapis.com/v1/places:searchText`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Goog-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
              "X-Goog-FieldMask": "*"
            },
            body: JSON.stringify({textQuery: "Pizza in Williamsburg Brooklyn"})
          }
        );
        const data = await response.json();
        console.log(data);
        setPlaceInfo(data);
      }
      getPlacesInfo();
    }
  }, [selected])
  

  const onMapClick = useCallback((e) => {
    setMarker(
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    );
  }, []);

  const {isLoaded} = useLoadScript({
    googleMapsApiKey : process.env.NEXT_PUBLIC_API_KEY
  });

  const center = useMemo(() => ({lat: 40.720570, lng: -73.962670}), []);
  if(!isLoaded) return(<div>Loading....</div>);
  return (
    <div className="w-screen">
      <GoogleMap 
        zoom={17} 
        center={center} 
        mapContainerClassName="map-container"
        onClick={onMapClick}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          clickableIcons: false,
        }}>

          {marker ? 
            <MarkerF
              clickable={true}
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
            /> :
            <div></div>
          }

          {selected ? (
            <InfoWindowF
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => { setSelected(false); }}
            >
            <h2>hullo</h2>
            </InfoWindowF>
          ) : null}
      
      </GoogleMap>

    </div>
  )
}


export default Map;