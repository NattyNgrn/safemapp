import Link from "next/link";

function Navbar(){

    return (
        <div>
            <div className="static object-bottom w-screen bg-stone-800">
                <div className="flex items-center justify-center">
                <Link href="/home" ><button className="hover:bg-red-300 m-10 w-80 h-20 rounded-md bg-red-200 text-4xl font-['Urbanist'] text-stone-800" >MAP</button></Link>
                <Link href="/writeareview" ><button className="hover:bg-red-300 m-10 w-80 h-20 rounded-md bg-red-200 text-4xl font-['Urbanist'] text-stone-800" >WRITE A REVIEW</button></Link>
                <Link href="/profile" ><button className="hover:bg-red-300 m-10 w-80 h-20 rounded-md bg-red-200 text-4xl font-['Urbanist'] text-stone-800" >PROFILE</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;