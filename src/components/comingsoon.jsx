
import './comingsoon.css'
import whitelogo from '../assets/whitelogoTwo.png'
import { Alert, Button, Snackbar, TextField } from "@mui/material"
import axios from 'axios'
import { useState } from 'react'

export default function Comingsoon() {  
  const [email,setEmail] = useState('')
  const [open,setOpen] = useState(false) ;
  const [message,setMessage] = useState('')
  const [servity , setServity] = useState('success')
  const handleClose = () => {
    setOpen(false)
  }


  
  const openbox = (message , servity ) => {
    setMessage(message)
        setServity(servity)
        setOpen(true) 
     
  }

  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    console.log(`Email: ${email}, Valid: ${isValid}`);
    return isValid;
  }; 
  const savemail = async () => {  
 

    const data = {
      email
    }

  
    if(isEmailValid(email)) {
     const response = await  axios.post('https://backend.checob.com/saveemail',data)
               
     openbox("You will be notified very soon" , "success")
    }else{
      openbox("Enter valid email" , "error")
    }
   
  }
    return ( 
        
        <div  className='comingsoonBackground' >  
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={servity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar> 
        <div className='csContainer' >

        
                  <div className='csftext' >
                     SIGNUP FOR FIRST ACCESS
                  </div>
                  <div className='csSlogan' >
                  Step into the World of Checob: A Symphony of Style, a Melody of Colors, and an Ode to Fashion's Endless Possibilities.
                  </div>
                  <div  className='csEmailbox' >
                                   <div className='csEmailBoxText' >
                                    BE THE FIRST TO TRY THEM
                                   </div>
                                   <div>
                                   <TextField  onChange={(e) => setEmail(e.target.value)} className='csTextfiled'  id="outlined-basic" label="Enter email address" variant="outlined" />
                                   </div>
                                   <div>
                                   <Button onClick={savemail}  sx={{backgroundColor : "BLACK" , width : "300px" , ":hover"  : { backgroundColor : "GREY"}}}  variant="contained"> GET NOTIFIED </Button>
                                   </div>
                  </div> 
                  <div className='csLogoContainer' >
                    <img  src={whitelogo} alt='whitelogo' />
                  </div>
        </div>         
        </div>
    )
}