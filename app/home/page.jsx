'use client'
import { GoogleMap, useLoadScript} from "@react-google-maps/api";
import { useMemo} from "react";
import "./map.css"
import Navbar from "../navbar";


function Map() {
const {isLoaded} = useLoadScript({
  googleMapsApiKey : "AIzaSyD73IHaXf6002ezY86TEGYElZpLlNJ6ZRU"
})

function Map(){
  return (<div><GoogleMap zoom={19} center={center} mapContainerClassName="map-container"> </GoogleMap> </div>)
}
if(!isLoaded) return(<div>Loading....</div>)
return <div><Map /></div>

function Map() {
  const center = useMemo(() => ({lat: 40.720570, lng: -73.962670}), []);

  return (
    <div className="w-screen">
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
    </GoogleMap>
    <Navbar></Navbar>
    </div>
  );
}
}


export default Map;