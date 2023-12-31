"use client"
import Navbar from "../navbar";
import { addReviewToDB } from "../serveractions";
import { useState } from "react";
import Rating from '@mui/material/Rating';
import { useUser, useAuth } from '@clerk/clerk-react';

function WriteReview(){
    const {userId} = useAuth();
    const [review, setReview] = useState({
        clerkid: userId,
        rating: 4,
        location: "",
        photosurl: "",
        notes: ""
    });

    async function addReview(e) {
        e.preventDefault();
        await addReviewToDB(review);
    }

    return(
        <div>
            <Navbar></Navbar>
            <div className="col-span-full space-y-10 ml-40">
                <form className="flex items-center flex-col m-8 space-y-20" >
                    <div className="flex items-center mb-4">
                        <label className="m-6"> Location:  </label>
                        <input className="rounded-lg"  onChange={(e) => setReview({...review, location: e.target.value})}/>
                    </div>
                    <div className="flex items-center mb-4">
                    <label  className="block ml-6 m-6" > Notes: </label>
                    <textarea className="rounded-lg" onChange={(e) => setReview({...review, notes: e.target.value})}></textarea>
                    </div>

                    <div className="flex items-center scale-150 ">
                    <Rating className="scale-150" 
                    onChange={(event, newValue)=>setReview({...review, rating: newValue})}
                    />
                    </div>
                    
                    <div className="flex items-center mb-4">
                    <input type="checkbox" className="w-6 h-6"/> 
                    <label className="ml-4">Gender</label>
                    </div>

                    <div className="flex items-center mb-4">
                    <input  type="checkbox" className="w-6 h-6"/> 
                    <label  className="ml-4">Sexuality</label>
                    </div>

                    <div className="flex items-center mb-4">
                    <input type="checkbox" className="w-6 h-6"/> 
                    <label  className="ml-4">Race</label>
                    </div>

                    <div className="flex items-center mb-4">
                    <input type="checkbox" className="w-6 h-6"/> 
                    <label className="ml-4">Ethnicity</label>
                    </div>

                    

                    <button className="p-4 hover:bg-violet-500 rounded mx-2 bg-violet-400 text-3xl " onClick={addReview}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default WriteReview;