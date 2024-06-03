import { Button, TextField, css } from "@mui/material";
import './login.css'
import { useNavigate } from "react-router-dom";
export default function Login() {


  const navigate = useNavigate()

    const buttonStyle = css`
  color: black; 
  background-color : black ;
  width : 400px ; 
  color : white ;
  &:hover {
    background-color: grey;
  }

  @media (max-width: 600px) {
    padding: 1px 2px; 
   width : 200px ;
    
  } 

  @media (min-width: 600px) and (max-width: 959px) { 
    font-size: 0.75rem; 
    padding: 2px 6px; 
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
                        LOGIN
                     </div>
                     <div>
                     <TextField sx={textfieldStyle} id="standard-basic" label="Email" variant="standard" />
                     </div>
                     <div>
                     <TextField sx={textfieldStyle} id="standard-basic" label="Password" variant="standard" />
                     </div>
                     <div className="forgetButton" >
                        FORGET YOUR PASSWORD ?
                     </div>
                     <div>
                     <Button   sx={buttonStyle}  variant="contained"> SIGN IN </Button>
                     </div>
                     <div onClick={() => {navigate('/register')}} className="createAccountButton" >
                        CREATE ACCOUNT
                     </div>
        </div>
    )
}