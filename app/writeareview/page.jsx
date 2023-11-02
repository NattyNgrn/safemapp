import Navbar from "../navbar";
function Writereview(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="flex items-center flex-col">
                <form className="flex items-center flex-col" >
                    <label> Date/Time: <input type="date" className="m-8" /> </label>
                    <label> Location: <input className="m-8" /> </label>

                    <label> Notes: <textarea className="m-8"></textarea> </label>
                    

                    <h1 className="m-8">RatING</h1>

                    <h1 className="m-8">UPLOAD PHOTO HERE</h1>
                    
                </form>
            </div>
        </div>
    )
}
export default Writereview;