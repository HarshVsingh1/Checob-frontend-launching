import Banner from "./components/banner";
import Comingsoon from "./components/comingsoon";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Productcard from "./components/productcard";
import Strip from "./components/strip";
import Welcomebanner from "./components/welcomebanner";
import './launchingpage.css'
import TshirtOne from './assets/tshirtone.png'
import TshirtTwo from './assets/tshirttwo.png'
import TshirtThree from './assets/tshirtthree.png'
import TshirtFour from './assets/tshirtfour.png'
import TshirtSix from './assets/tshirtsix.png'
import TshirtEight from './assets/tshirteight.png'
import TshirtNine from './assets/tshirtnine.png'
import TshirtTen from './assets/tshirtten.png'
import TshirtEleven from './assets/tshirteleven.png'
import TshirtTwelve from './assets/tshirttwelve.png'
import TshirtThirteen from './assets/tshirtthirteen.png'
import TshirtFifteen from './assets/tshirtfifteen.png'

export default function Launch() {

    const dataone = [
        {
            name : "Sharingan t-shirt" ,
            price : 599 ,
            imageurl : TshirtOne
        },
        {
            name : "Thorfinn t-shirt" ,
            price : 699 ,
            imageurl : TshirtTwo
        },
        {
            name : "Batman t-shirt" ,
            price : 999 ,
            imageurl :TshirtThree
        },
        {
            name : "Dimension-shirt" ,
            price : 899 ,
            imageurl : TshirtFour
        }
    ]

    const datatwo = [
        {
            name : "Batman t-shirt" ,
            price : 599 ,
            imageurl : TshirtFifteen
        },
        {
            name : "Cyber t-shirt" ,
            price : 699 ,
            imageurl : TshirtSix
        },
        {
            name : "Sky t-shirt" ,
            price : 999 ,
            imageurl :TshirtThirteen
        },
        {
            name : "Sonic t-shirt" ,
            price : 899 ,
            imageurl : TshirtEight
        }
    ] 

    const datathree = [
        {
            name : "Sunset t-shirt" ,
            price : 599 ,
            imageurl : TshirtNine
        },
        {
            name : "Blue stag t-shirt" ,
            price : 699 ,
            imageurl : TshirtTen
        },
        {
            name : "Skull t-shirt" ,
            price : 999 ,
            imageurl :TshirtEleven
        },
        {
            name : "Cyber t-shirt" ,
            price : 899 ,
            imageurl : TshirtTwelve
        }
    ]

    return (
        <div>                  <div className="strip" >
                                    <Strip></Strip>
                               </div>
                               <div>
                                <Navbar></Navbar>
                               </div>
                               <div className="launching" >
                                         <Welcomebanner></Welcomebanner>
                               </div> 
                               <div className="latestDropStrip" >
                                    <div className="latestDropStripText" >
                                        LATEST DROP
                                    </div>
                                    <div className="latestDropStripText" >
                                        DISCOVER MORE
                                    </div> 

                               </div>
                                <div id="newin" > 
                                   <Productcard data={dataone} ></Productcard>
                                </div>  
                                <div>
                                    <Banner></Banner>
                                </div>
                                <div className="latestDropStrip" >
                                    <div className="latestDropStripText" >
                                        MORE FROM CHECOB
                                    </div>
                                    <div className="latestDropStripText" >
                                        DISCOVER MORE
                                    </div> 

                               </div>
                               
                                <div>
                                <Productcard data={datatwo} ></Productcard> 
                                <br></br>
                                <br></br>
                                <Productcard data={datathree} ></Productcard>
                                </div>
                                <div id="comingsoon" >
                                    <Comingsoon></Comingsoon>
                                </div>
                                <div>
                                    <Footer></Footer>
                                </div>
        </div>
    )
}