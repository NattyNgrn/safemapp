"use client"
import Navbar from "../navbar";
import { addReviewToDB } from "../serveractions";
import { useState } from "react";

function WriteReview(){

    const [review, setReview] = useState({
        rating: 4, 
        location: "",
        photourl: "",
        notes: ""
    });

    function tempfunc(e) {
        e.preventDefault();
        addReviewToDB(review);
    }

    return(
        <div>
            <Navbar></Navbar>
            <div className="flex items-center flex-col">
                <form className="flex items-center flex-col" >
                    <label> Location: <input className="m-8" onChange={(e) => setReview({...review, location: e.target.value})}/> </label>

                    <label> Notes: <textarea className="m-8" onChange={(e) => setReview({...review, notes: e.target.value})}></textarea> </label>
                    

                    <label>RatING <input className="m-8" onChange={(e) => setReview({...review, rating: e.target.value})}></input></label>

                    <h1 className="m-8" onChange={(e) => setReview({...review, photourl: e.target.value})}>UPLOAD PHOTO HERE</h1>
                    <button className="rounded-md bg-indigo-600 px-3 py-2 shadow-sm hover:bg-indigo-500" onClick={tempfunc}>Create Account</button>
                </form>
            </div>
        </div>
    )
}
export default Writereview;