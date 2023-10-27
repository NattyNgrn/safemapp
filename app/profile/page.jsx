import { UserButton } from "@clerk/nextjs";
import Navbar from "../navbar"

export default function Profile(){
    return(
        <div>
            <h1>PROFILE PAGE</h1>
            <UserButton afterSignOutUrl="/"/>
            <Navbar></Navbar>
        </div>
    )
}