// import React from 'react';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
// } from 'use-places-autocomplete';

// const Search = ({ panTo, searchNearby }) => {
//     const {
//         ready,
//         value,
//         suggestions: { status, data },
//         setValue,
//         clearSuggestions,
//     } = usePlacesAutocomplete({
//         requestOptions: {
//             location: { lat: () => 43.6532, lng: () => -79.3832 }, // Default location
//             radius: 100 * 1000, // Search radius
//         },
//     });

//     const handleInput = (e) => {
//         setValue(e.target.value);
//     };

//     const handleSelect = async (address) => {
//         setValue(address, false);
//         clearSuggestions();

//         try {
//             const results = await getGeocode({ address });
//             const { lat, lng } = await getLatLng(results[0]);
//             panTo({ lat, lng });
//             searchNearby({ lat, lng }, value);
//         } catch (error) {
//             console.error("Error: ", error);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center">
//             <Autocomplete
//                 freeSolo
//                 disableClearable
//                 value={value}
//                 onChange={(event, newValue) => {
//                     handleSelect(newValue);
//                 }}
//                 onInputChange={(event, newInputValue) => {
//                     handleInput(event);
//                 }}
//                 options={data.map((suggestion) => suggestion.description)}
//                 renderInput={(params) => (
//                     <div className="flex items-center justify-center">
//                     <form>
//                         <label className="text-stone-800 text-xlg" > SEARCH:
//                         <TextField
//                             {...params}
//                             className="form-input rounded"
//                             onChange={handleInput}
//                         />
//                         </label>
//                         <button className="hover:bg-violet-400 p-px px-2 rounded mx-2 bg-violet-300 text-xlg">Enter</button>
//                     </form>
//                     </div>
//                 )}
//             />
//         </div>
//     );
// };

// export default Search;