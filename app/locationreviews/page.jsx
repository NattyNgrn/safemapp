"use client"
import { useEffect, useState } from "react"
import Review from "../indReview"
import { getAllReviews } from "../serveractions"


function LocationReviews(){
    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        getAllReviews("nipponcha").then(result => setReviews(result))
    }, []);


    
    return(
        <div className="grid-cols-1 sm:grid md:grid-cols-4" >
            {
            reviews.map((review) => 
                <Review key={review.id} review={review} ></Review>
            )}
        </div>
    )
}

export default LocationReviews