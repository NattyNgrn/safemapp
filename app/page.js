"use client"
import { useEffect, useState } from "react";
import Map from "./map/page"
import Navbar from "./navbar"
import { useAuth } from "@clerk/nextjs"
import CreateAccount from "./createaccount/page";
import { getIndividual } from "./serveractions";

function Home(){
  const {userId} = useAuth();
  const [hasCreatedAccount, setHasCreatedAccount] = useState(true);

  useEffect(() => {
    getIndividual(userId).then((result)=>{
      if (!result) setHasCreatedAccount(false);
    });
  }, []);
  
  if (hasCreatedAccount)
    return (
      <div>
        <Navbar></Navbar>
        <Map></Map>
      </div>
    );
  else
      return (
        <div>
          <CreateAccount></CreateAccount>
        </div>
      )
}

export default Home;