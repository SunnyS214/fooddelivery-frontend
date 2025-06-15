import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopUp = ({ setshowLogin }) => {
    const [currentState, setcurrentState] = useState('Login')
    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => { setshowLogin(false) }} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? null :
                        <input type="text" placeholder='Your Name' required />}

                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required />
                    <p>By Continuing , i agree to the terms of use & privacy policy</p>
                </div>
                {currentState === "Sign Up" ?
                    <p>Already have an account <span onClick={() => { setcurrentState("Login") }} >Login here</span></p>
                    : <p>Create a new account? <span onClick={() => { setcurrentState("Sign Up") }} >Click here</span> </p>
                }


            </form>
        </div>
    )
}

export default LoginPopUp