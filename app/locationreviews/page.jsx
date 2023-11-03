"use client"
import { useEffect, useState } from "react"
import Review from "../indReview"
import { getAllReviews } from "../serveractions"
import Navbar from "../navbar";


function LocationReviews(){
    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        getAllReviews("nipponcha").then(result => setReviews(result))
    }, []);


    
    return(
        <div>
            <Navbar></Navbar>
            <div className="grid-cols-1 sm:grid md:grid-cols-4 m-8" >
                {
                reviews.map((review) => 
                    <Review key={review.id} review={review} ></Review>
                )}
            </div>
        </div>
    )
}

export default LocationReviews;