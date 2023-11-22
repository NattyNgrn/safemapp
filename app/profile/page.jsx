"use client"
import Navbar from "../navbar"
import { useUser, useAuth } from '@clerk/clerk-react';
import { getIndividual } from "../serveractions";
import { useState, useEffect } from "react";
import { editProfile } from "../serveractions";

export default function Profile(){

    const {userId} = useAuth();

    const [person, setPerson] = useState(undefined);
    const user = useUser();

    useEffect(() => {
        getIndividual(userId).then((result)=>{setPerson(result)});
    }, []);    

    const [showEdit, setShowEdit] = useState(false);

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [sexuality, SetSexuality] = useState("")
    const [address, setAddress] = useState("")

    function edit(){
        setShowEdit(true)
    }
    function cancel(){
        setShowEdit(false);
    }
    
    async function save(){
        await editProfile(userId, person.username, person.name, person.gender, person.race, person.ethnicity, person.sexuality, person.address);
        setShowEdit(false);
    }
    if (showEdit){

        return(
            <div className="flex items-center flex-col">
            <h1 className="m-8 font-bold">Edit Your Profile</h1>
            <form className="flex items-center flex-col">
                <label> Username: <input className="m-8" type="text" value={person?.username} onChange={(e) => {setPerson({...person, username: e.target.value})}}></input> </label>
                <label> Name: <input className="m-8" type="text" value={person?.name} onChange={(e) => {setPerson({...person, name: e.target.value})}}></input> </label>
                <label> Race: <input className="m-8" type="text" value={person?.race} onChange={(e) => {setPerson({...person, race: e.target.value})}}></input> </label>
                <label> Ethnicity: <input className="m-8" type="text" value={person?.ethnicity} onChange={(e) => {setPerson({...person, ethnicity: e.target.value})}}></input> </label>
                <label> Gender: <input className="m-8" type="text" value={person?.gender} onChange={(e) => {setPerson({...person, gender: e.target.value})}}></input> </label>
                <label> Sexuality: <input className="m-8" type="text" value={person?.sexuality} onChange={(e) => {setPerson({...person, sexuality: e.target.value})}}></input> </label>
                <label> Address: <input className="m-8" type="text" value={person?.address} onChange={(e) => {setPerson({...person, address: e.target.value})}}></input> </label>

                <button className="p-2 hover:bg-violet-500 rounded mx-2 bg-violet-400 text-3xl font-bold" onClick={save}>Save</button>
                <button className="m-8 p-2 hover:bg-violet-500 rounded mx-2 bg-violet-400 text-3xl font-bold" onClick={cancel}>Cancel</button>
            </form>
        </div>
        )
    }

    
    if (!showEdit){
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

                    <button className="p-2 hover:bg-violet-500 rounded mx-2 bg-violet-400 text-4xl font-bold" onClick={edit}>Edit Profile</button>
                </div>
            </div>
            

        </div>
    )
}
}