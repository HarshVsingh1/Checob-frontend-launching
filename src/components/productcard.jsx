import './productcard.css' 

import { Button } from "@mui/material"
import { css } from '@emotion/react';
import { Link } from 'react-scroll';
const buttonStyle = css`
  color: black;
  border-color: black;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 0.35rem; 
    padding: 3px 6px; 
    height : 20px;
  }
`;

export default function Productcard({data}) { 


    return (  
        <div>
        <div className='cardsContainer' >  

            {
                data.map((data) => (
                    <Card data={data} ></Card>
                ))
            } 

           

        </div> 
        <div  className='productButtonContainer'  > 
        <Link to="comingsoon" smooth={true} duration={1000}>
        <Button
        sx={buttonStyle}
        variant="outlined"
      >
        DISCOVER MORE
      </Button> 
      </Link>

            </div>
            </div>
    )
}


function Card({data}) {
    return (
        <div> 
            {console.log(data)}
                   <div className='productCardImage' >
                     <img src={data.imageurl} />
                   </div>
                   <div>
                    <div className='cardData' >
                        {data.name}
                    </div>
                    <div className='cardDataPrice' > 
                        Rs. {data.price}
                    </div>
                   </div>  
        </div>
    )
}