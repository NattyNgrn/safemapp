"use client"
import Review from "../indReview"
import Navbar from "../navbar";

function Individual(){
    return(
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-3xl m-8" >USER:</h1>
                <h1 className="text-3xl m-8" >LOCATION:</h1>
                <h1 className="text-3xl m-8" >DATE:</h1>
                <h1 className="text-3xl m-8" >RATING::</h1>
                <h1 className="text-3xl m-8">NOTES:</h1>
                <h1 className="text-3xl m-8">PHOTOS:</h1>
                <img></img>
            </div>
        </div>
    )
}

export default Individual;