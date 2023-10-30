import UploadWidget from "../uploadwidget"
import { PrismaClient } from "@prisma/client"
import { useState } from "react";
const prisma = new PrismaClient();

const [username, SetUsername] = useState("");
const [name, SetName] = useState("");
const [DOB, SetDOB] = useState();
const [race, SetRace] = useState("");
const [ethnicity, SetEthnicity] = useState("");
const [gender, SetGender] = useState("");
const [sexuality, SetSexuality] = useState("");
const [photourl, SetPhotourl] = useState("");
const [uploading, setUploading] = useState(false);



const user = await prisma.user.create({
    data: {
        username: username,
        name: name,
        DOB: DOB,
        race: race,
        ethnicity: ethnicity,
        gender: gender,
        sexuality: sexuality,
        photourl: photourl
        
    }
})


async function CreateAccount(){
    <div>
        <h1>Create Your Account</h1>

        <div>
            <form>
                <label> Username: <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}></input> </label>
                <label> Name: <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input> </label>
                <label> DOB: <input type="date" value={DOB} onChange={(e) => {SetDOB(e.target.value)}}></input> </label>
                <label> Race: <input type="text" value={race} onChange={(e) => {SetRace(e.target.value)}}></input> </label>
                <label> Ethnicity: <input type="text" value={ethnicity} onChange={(e) => {SetEthnicity(e.target.value)}}></input> </label>
                <label> Gender: <input type="text" value={gender} onChange={(e) => {SetGender(e.target.value)}}></input> </label>
                <label> Sexuality: <input type="text" value={sexuality} onChange={(e) => {SetSexuality(e.target.value)}}></input> </label>
                <UploadWidget setUploading={setUploading} setUrl={SetPhotourl}></UploadWidget>
                <button>Create Account</button>
            </form>
        </div>
    </div>
}

export default CreateAccount;