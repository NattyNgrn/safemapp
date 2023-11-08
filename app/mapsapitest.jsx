// "use client"
// import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
// import { getIndividual } from "./serveractions";
// import { useAuth } from "@clerk/nextjs";
// import { useState, useEffect } from "react";
// import {setKey, setDefaults, setLanguage, setRegion, fromAddress, fromLatLng, fromPlaceId, setLocationType, geocode, RequestType} from "react-geocode";
// import { GoogleMap, useLoadScript, InfoWindow, MarkerF} from "@react-google-maps/api";


// //geocode address to latlng
// function Idk() {
//     setDefaults({
//         key: process.env.NEXT_PUBLIC_API_KEY,
//         language: "en",
//         region: "es"
//     });

// const {userId} = useAuth();

//     //const [person, setPerson] = useState(undefined);

//     // const [center, setCenter] = useState("")
//     // const [address, setAddress] = useState("");

//     // useEffect(() => {
//     //     getIndividual(userId).then((result)=>{setPerson(result)});
//     // }, []);    

//     //const userAddress = person?.address;

    // async function latlng(){
    //     const person = await getIndividual(userId);
    //     const result = await getGeocode({address: person.address});
    //     const {lat, lng} = await getLatLng(result[0]);
    //     console.log({lat, lng});
    //     return {lat, lng};
    // }

//     //reverse geocode latlng to address
//     async function getAddress() {
//         const {lat, lng} = await latlng();
//         const address = await geocode(RequestType.LATLNG, `${lat}, ${lng}`);
//         console.log(address.results[0].formatted_address);
//         return address.results[0].formatted_address;
//     }
//     getAddress();


//     // custom info window title, address, write a review
//     <InfoWindow>

//     </InfoWindow>


//     return (
//         <div></div>
//     )
// }
    
    
//     export default Idk;
    