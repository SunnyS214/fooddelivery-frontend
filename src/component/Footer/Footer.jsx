import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer'  id='footer' >
<div className="footer-content">
    <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div className="footer-socail-icon">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
    </div>
    </div>

    <div className="footer-content-center">
<h2>Company</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
    </div>

    <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
    <ul>
        <li>+91-7255878712</li>
        <li>contact@mydummy475@mail.com</li>
    </ul>
    </div>

</div>
<hr />
<p className="footer-copyright">Copyright 2025 C Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer