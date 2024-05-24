import './welcomebanner.css'
import { Button, TextField } from "@mui/material"
import { css } from '@emotion/react'; 
import { Link } from 'react-scroll'; 

const buttonStyle = css`
  color: black; 
  background-color : black ;
  width : 300px ; 
  color : white ;
  &:hover {
    background-color: grey;
  }

  @media (max-width: 600px) {
    font-size: 0.25rem; 
    padding: 1px 2px; 
    height : 10px;
    width : 30px ;
  } 

  @media (min-width: 600px) and (max-width: 959px) { 
    font-size: 0.75rem; 
    padding: 2px 6px; 
    height : 30px;
    width : 120px ;
  }
`;

export default function Welcomebanner() { 

    return (
        <div className="welcomebannerContainer" >
                  
                 
                 
                  
                  <div  className='signupContainer' >
                                  
                                  
                  <Link to="comingsoon" smooth={true} duration={1000}>
                                   <Button    sx={buttonStyle}  variant="contained"> GET NOTIFIED </Button>
                                   </Link>
                  </div> 
                 
                 
                  <div></div>
        </div>
    )
}