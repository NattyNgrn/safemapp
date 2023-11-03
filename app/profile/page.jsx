"use client"
import { UserButton } from "@clerk/nextjs";
import Navbar from "../navbar"
import { useAuth } from '@clerk/clerk-react';
import { getIndividual } from "../serveractions";
import { useState, useEffect } from "react";

export default function Profile(){

    // const {userId} = useAuth();
    // console.log(userId)

    const [user, setUser] = useState(undefined);
    useEffect(() => {
        getIndividual(1).then((result)=>setUser(result));
    }, []);    

    return(
        <div>
            <Navbar></Navbar>
            <div className="px-4 sm:px-0 flex items-center flex-col">
                <img class="m-8 mx-auto rounded-full w-96 h-96 shadow-xl dark:shadow-gray-800"  />
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Username: {user?.username} </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Name: {user?.name} </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">DOB: {user?.DOB.toString()}</h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Race: {user?.race} </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Ethnicity: {user?.ethnicity} </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Gender: {user?.gender} </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Sexuality: {user?.sexuality} </h1>
            </div>
            

        </div>
    )
}