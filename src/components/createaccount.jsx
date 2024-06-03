import { Button, TextField, css } from "@mui/material";
import './login.css'
export default function Register() {
    const buttonStyle = css`
  color: black; 
  background-color : black ;
  width : 400px ; 
  color : white ;
  &:hover {
    background-color: grey;
  }

  @media (max-width: 600px) {

   width : 200px ;
    
  } 

  @media (min-width: 600px) and (max-width: 959px) { 
   
  
    height : 30px;
    width : 400px ;
  }
`;

const textfieldStyle = css `
width : 400px ;

@media (max-width: 600px) {
  
 width : 100% ;
  
} 

`

    return (
        <div className="loginContainer" >
                     <div className="loginText" >
                        CREATE ACCOUNT
                     </div>
                     <div>
                     <TextField sx={textfieldStyle} id="standard-basic" label="First Name" variant="standard" />
                     </div>
                     <div>
                     <TextField sx={textfieldStyle} id="standard-basic" label="Last Name" variant="standard" />
                     </div>
                     <div>
                     <TextField sx={textfieldStyle} id="standard-basic" label="Email" variant="standard" />
                     </div>
                     <div>
                     <TextField sx={textfieldStyle} id="standard-basic" label="Password" variant="standard" />
                     </div>
                     
                   
                     <div>
                     <Button   sx={buttonStyle}  variant="contained"> Create  </Button>
                     </div>
                   
        </div>
    )
}