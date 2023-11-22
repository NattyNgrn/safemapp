import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindowF, } from '@react-google-maps/api';
import Search from './search'; // Your existing search component
import Link from "next/link";
import "./map.css"
import { useUser, useAuth } from '@clerk/clerk-react';
import { getIndividual } from "../serveractions";

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 43.6532,
  lng: -79.3832
};

const libraries = ["places"];

const MyMapComponent = () => {
  const {userId} = useAuth();

    const [person, setPerson] = useState(undefined);
    const user = useUser();

    useEffect(() => {
        getIndividual(userId).then((result)=>{setPerson(result)});
    }, []);   

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const mapRef = useRef();

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const searchNearby = (center, query) => {
    const request = {
      location: center,
      radius: '5000',
      // type: ['cafe'],
      keyword: query,
  };
    const service = new google.maps.places.PlacesService(mapRef.current);
  

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        console.log(results);
        const place = results[0];
        setMarkers(//results[0].map(place => ({
          {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            info: {
              name: place.name,
              address: place.vicinity,
              // Add more details here if available
            },
          }
        );
      }
    });
  };

  useEffect(() => {
    if (!isLoaded) return;
    searchNearby(mapRef.current, center);
  }, [isLoaded]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="w-screen">
      <Search panTo={panTo} searchNearby={searchNearby} />
      <GoogleMap
        mapContainerClassName="map-container"
        zoom={12}
        center={center}
        onLoad={map => {
          mapRef.current = map;
          searchNearby(map, center);
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindowF
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>{selected.info.name}</h2>
              <p>{selected.info.address}</p>
              <Link href="/writeareview" ><h2>WRITE A REVIEW</h2></Link>
            </div>
          </InfoWindowF>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default MyMapComponent;
