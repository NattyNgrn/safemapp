'use client'
import { GoogleMap, useLoadScript} from "@react-google-maps/api";
import { useMemo} from "react";
import "./map.css"
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";



function Map() {
const {isLoaded} = useLoadScript({
  googleMapsApiKey : process.env.NEXT_PUBLIC_API_KEY
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
    </div>
  );
}
}


export default Map;