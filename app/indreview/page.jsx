"use client"
import Rating from '@mui/material/Rating';
import Navbar from "../navbar";
import { getIndividual, getIndividualReview } from "../serveractions";
import { useState, useEffect } from "react";


function Individual({searchParams}){

    const [review, setReview] = useState(undefined);
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        "use server"
        const temp = async () => {
            const tempReview = await getIndividualReview(parseInt(searchParams.id));
            const tempUser = await getIndividual(tempReview.clerkid);
            setReview(tempReview);
            setUser(tempUser);
        }
        temp();
    }, []);

    return(
        <div>
            <Navbar></Navbar>
            <div className="col-span-full space-y-10 ml-40">
                <div className="flex items-center flex-col m-8 space-y-20">
                    <h1 className="text-3xl" >USER: {user?.username} </h1>
                    <h1 className="text-3xl" >LOCATION: {review?.location} </h1>
                    <h1 className="text-3xl" >DATE: {review?.createdat.toDateString()} </h1>
                    <Rating className="scale-150" value={parseInt(review?.rating)} readOnly />
                    <h1 className="text-3xl">RATING: {review?.rating} </h1>
                    <h1 className="text-3xl">NOTES: {review?.notes} </h1>
                    <h1 className="text-3xl">PHOTOS: {review?.photosurl} </h1>
                    <h1 className="text-3xl" >RACE: {user?.race} </h1>
                    <h1 className="text-3xl" >ETHNICITY: {user?.ethnicity} </h1>
                    <h1 className="text-3xl" >GENDER: {user?.gender} </h1>
                    <h1 className="text-3xl" >SEXUALITY: {user?.sexuality} </h1>
                <img></img>
                </div>
            </div>
        </div>
    )
}

export default Individual;