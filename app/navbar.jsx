import Link from "next/link";
import { UserButton } from "@clerk/nextjs";



function Navbar(){

    return (
            <div className="object-top w-screen flex items-center justify-center bg-stone-800 h-16">
                <div className="flex items-center justify-center">
                    <form>
                        <label className="text-violet-300 text-xlg" >SEARCH: <input type='text' className="form-input rounded" ></input></label>
                        <button className="hover:bg-violet-400 p-px px-2 rounded mx-2 bg-violet-300 text-xlg" >Enter</button>
                    </form>
                    <Link href="/" ><button className=" hover:bg-violet-400 p-px px-2 rounded mx-2 bg-violet-300 text-xlg" >MAP</button></Link>
                    <Link href="/writeareview" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-base" >WRITE A REVIEW</button></Link>
                    <Link href="/profile" ><button className="hover:bg-violet-400 p-px px-2 rounded mx-2 bg-violet-300 text-xlg">PROFILE</button></Link>
                    <Link href="/locationreviews" ><button className="hover:bg-red-300 p-px px-2 rounded mx-2 bg-red-200 text-base">LOCATION REVIEWS</button></Link>
                    <div className="scale-150 p-8">
                    <UserButton className="p-px px-4" afterSignOutUrl="/"/>
                    </div>
                </div>
            </div>
        
    )
}

export default Navbar;