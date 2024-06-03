import React from 'react';
import Footer from "./components/footer";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Strip from "./components/strip";
import './loginpage.css';
import Register from './components/createaccount';

export default function Registerpage() {
    return (
        <div className="loginpage-container">
            <div className="strip">
                <Strip />
            </div>
            <div>
                <Navbar />
            </div>
            <div className="content">
                <Register />
            </div>
            <Footer className="footer" />
        </div>
    )
}
