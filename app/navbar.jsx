import Link from "next/link";
import { UserButton } from "@clerk/nextjs";


function Navbar(){

    return (
            <div className="object-top w-screen flex items-center justify-center bg-stone-800 h-16">
                <div className="flex items-center justify-center">
                    <form>
                        <label className="text-red-200 text-lg" >SEARCH: <input type='text' className="form-input rounded" ></input></label>
                        <button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-base" >Enter</button>
                    </form>
                    <Link href="/" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-base" >MAP</button></Link>
                    <Link href="/writeareview" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-base" >WRITE A REVIEW</button></Link>
                    <Link href="/profile" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-base">PROFILE</button></Link>
                    <Link href="/locationreviews" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-base">LOCATION REVIEWS</button></Link>
                    <UserButton className="p-px px-4" afterSignOutUrl="/"/>
                </div>
            </div>
        
    )
}

export default Navbar;