import Link from "next/link";
import { UserButton } from "@clerk/nextjs";


function Navbar(){

    return (
            <div className="object-top w-screen flex items-center justify-center bg-stone-800 h-16">
                <div className="flex items-center justify-center">
                    <form>
                        <label className="text-red-200 font-['Urbanist']" >SEARCH: <input type='text' className="form-input rounded" ></input></label>
                        <button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 font-['Urbanist'] text-base text-stone-800" >Enter</button>
                    </form>
                    <Link href="/" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 font-['Urbanist'] text-base text-stone-800" >MAP</button></Link>
                    <Link href="/writeareview" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 font-['Urbanist'] text-base text-stone-800" >WRITE A REVIEW</button></Link>
                    <Link href="/profile" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 font-['Urbanist'] text-base text-stone-800">PROFILE</button></Link>
                    <Link href="/locationreviews" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 font-['Urbanist'] text-base text-stone-800">LOCATION REVIEWS</button></Link>
                    <UserButton className="p-px px-4" afterSignOutUrl="/"/>
                </div>
            </div>
        
    )
}

export default Navbar;