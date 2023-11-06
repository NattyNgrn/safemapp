"use client"
import { UserButton } from "@clerk/nextjs";
import Navbar from "../navbar"
import { useUser, useAuth } from '@clerk/clerk-react';
import { getIndividual } from "../serveractions";
import { useState, useEffect } from "react";
import { UserProfile } from '@clerk/nextjs';

export default function Profile(){

    const {userId} = useAuth();

    const [person, setPerson] = useState(undefined);
    const user = useUser();

    useEffect(() => {
        console.log("in use effect")
        getIndividual(userId).then((result)=>{setPerson(result)});
    }, []);    

    return(
        <div>
            <Navbar></Navbar>
            <div className="col-span-full space-y-10 ml-40">
                <div className="flex items-center flex-col m-8 space-y-20">
                    <img src={user.user?.imageUrl} className="m-8 mx-auto rounded-full w-96 h-96 shadow-xl dark:shadow-gray-800"  />
                    <h1 className="m-8">Username: {person?.username} </h1>
                    <h1 className="m-8">Name: {person?.name} </h1>
                    <h1 className="m-8">Race: {person?.race} </h1>
                    <h1 className="m-8">Ethnicity: {person?.ethnicity} </h1>
                    <h1 className="m-8">Gender: {person?.gender} </h1>
                    <h1 className="m-8">Sexuality: {person?.sexuality} </h1>
                    <h1 className="m-8">Address: {person?.address} </h1>

                    <button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 " >Edit Profile</button>
                </div>
            </div>
            

        </div>
    )
}