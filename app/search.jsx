import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import { getIndividual } from "./serveractions";
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";

function Search(){

    const {userId} = useAuth();

    const [person, setPerson] = useState(undefined);

    useEffect(() => {
        getIndividual(userId).then((result)=>{setPerson(result)});
    }, []);    

    const userAddress = person?.address;

    async function latlng(address){
        const result = await getGeocode({address});
        const {lat, lng} = await getLatLng(result[0]);
        console.log( {lat, lng});
    }
    latlng(userAddress);

    <form>
        <label className="text-red-200 text-lg" >SEARCH: <input type='text' className="form-input rounded" ></input></label>
        <button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-base" >Enter</button>
    </form>
}

export default Search;