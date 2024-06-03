import { useEffect } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Strip from "./components/strip";

export default function Newin() { 



    useEffect(()=> {

    },[])
    return (
        <div>
               
                  <div>
                    <Strip></Strip>
                  </div>
                  <div>
                    <Navbar></Navbar>
                  </div>
                  <div></div>
                  <div>
                    <Footer></Footer>
                  </div>
        </div>
    )
}