import { UserButton } from "@clerk/nextjs";
import Navbar from "../navbar"


export default function Profile(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="px-4 sm:px-0 flex items-center flex-col">
                <img class="m-8 mx-auto rounded-full w-96 h-96 shadow-xl dark:shadow-gray-800"  />
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Username: </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Name: </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">DOB: </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Race: </h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Ethnicity:</h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Gender:</h1>
                <h1 className="m-8 text-xl font-['Urbanist'] text-stone-800">Sexuality:</h1>
            </div>
            

        </div>
    )
}