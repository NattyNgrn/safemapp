"use client"
import Navbar from "../navbar";
import { addReviewToDB } from "../serveractions";
import { useState } from "react";
import { Rating } from "@material-tailwind/react";
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

    function addReview(e) {
        e.preventDefault();
        addReviewToDB(review);
    }

    return(
        <div>
            <Navbar></Navbar>
            <div className="col-span-full space-y-10">
                <form className="flex items-center flex-col m-8 space-y-20" >
                    <div class="flex items-center mb-4">
                        <label className="m-6"> Location:  </label>
                        <input className="rounded-lg"  onChange={(e) => setReview({...review, location: e.target.value})}/>
                    </div>
                    <div class="flex items-center mb-4">
                    <label for="notes" className="block ml-6 m-6" > Notes: </label>
                    <textarea id="notes" className="rounded-lg" onChange={(e) => setReview({...review, notes: e.target.value})}></textarea>
                    </div>

                    <div className="flex flex-col gap-4">
                    <label>Rating: <Rating unratedColor="red" ratedColor="amber" /></label>
                    </div>
                    
                    <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" className="w-6 h-6"/> 
                    <label for="default-checkbox" className="ml-4">Gender</label>
                    </div>

                    <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" className="w-6 h-6"/> 
                    <label for="default-checkbox" className="ml-4">Sexuality</label>
                    </div>

                    <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" className="w-6 h-6"/> 
                    <label for="default-checkbox" className="ml-4">Race</label>
                    </div>

                    <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" className="w-6 h-6"/> 
                    <label for="default-checkbox" className="ml-4">Ethnicity</label>
                    </div>

                    

                    <button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-3xl" onClick={addReview}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default WriteReview;