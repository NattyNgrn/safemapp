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
            <div className="px-4 sm:px-0 flex items-center flex-col">
                <img src={user.user?.imageUrl} className="m-8 mx-auto rounded-full w-96 h-96 shadow-xl dark:shadow-gray-800"  />
                <h1 className="m-8 text-xl">Username: {person?.username} </h1>
                <h1 className="m-8 text-xl">Name: {person?.name} </h1>
                <h1 className="m-8 text-xl">Race: {person?.race} </h1>
                <h1 className="m-8 text-xl ">Ethnicity: {person?.ethnicity} </h1>
                <h1 className="m-8 text-xl">Gender: {person?.gender} </h1>
                <h1 className="m-8 text-xl">Sexuality: {person?.sexuality} </h1>
            </div>
            

        </div>
    )
}