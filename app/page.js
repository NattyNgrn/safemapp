import Map from "./home/page"
import Navbar from "./navbar"
import CreateAccount from "./createaccount/page"
export default function Home(){
  return (
    <div>
      <Navbar></Navbar>
      <CreateAccount></CreateAccount>
    </div>
  )
}