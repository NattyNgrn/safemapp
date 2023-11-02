"use client"
import UploadWidget, { UnsignedUpload } from "../uploadwidget"
import { PrismaClient } from "@prisma/client"
import { useState } from "react";


function CreateAccount(){

    const [username, SetUsername] = useState("");
    const [name, SetName] = useState("");
    const [DOB, SetDOB] = useState();
    const [race, SetRace] = useState("");
    const [ethnicity, SetEthnicity] = useState("");
    const [gender, SetGender] = useState("");
    const [sexuality, SetSexuality] = useState("");
    const [photourl, SetPhotourl] = useState("");
    const [uploading, setUploading] = useState(false);

    console.log(photourl);
    return(
        <div className="flex items-center flex-col">
            <h1 className="m-8">Create Your Account</h1>
            <form className="flex items-center flex-col">
                <label> Username: <input className="m-8" type="text" value={username} onChange={(e) => {SetUsername(e.target.value)}}></input> </label>
                <label> Name: <input className="m-8" type="text" value={name} onChange={(e) => {SetName(e.target.value)}}></input> </label>
                <label> DOB: <input className="m-8" type="date" value={DOB} onChange={(e) => {SetDOB(e.target.value)}}></input> </label>
                <label> Race: <input className="m-8" type="text" value={race} onChange={(e) => {SetRace(e.target.value)}}></input> </label>
                <label> Ethnicity: <input className="m-8" type="text" value={ethnicity} onChange={(e) => {SetEthnicity(e.target.value)}}></input> </label>
                <label> Gender: <input className="m-8" type="text" value={gender} onChange={(e) => {SetGender(e.target.value)}}></input> </label>
                <label> Sexuality: <input className="m-8" type="text" value={sexuality} onChange={(e) => {SetSexuality(e.target.value)}}></input> </label>
                <button className="rounded-md bg-indigo-600 px-3 py-2 shadow-sm hover:bg-indigo-500" >Create Account</button>
            </form>
        </div>
    )
}

export default CreateAccount;