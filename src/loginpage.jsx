import React from 'react';
import Footer from "./components/footer";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Strip from "./components/strip";
import './loginpage.css';

export default function Loginpage() {
    return (
        <div className="loginpage-container">
            <div className="strip">
                <Strip />
            </div>
            <div>
                <Navbar />
            </div>
            <div className="content">
                <Login />
            </div>
            <Footer className="footer" />
        </div>
    )
}
