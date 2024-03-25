import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './components/Home';
import Civil from './components/Civil';
import Coe from './components/Coe';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Jobs from './components/Jobs';
import Review from './components/Review';
import Login from './components/Login';
import Signup from './components/Signup';
import Ece from './components/Ece';
import Ee from './components/Ee';
import Mech from './components/Mech';
import Prod from './components/Prod';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import './App.css'
// import {headerill} from './assets/Header illustration.jpg'
export default function App() {
  //  const[isLoggedIn,setLoggedIn]=useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path='/contactus' element={<Contactus></Contactus>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/jobs' element={<Jobs></Jobs>}></Route>
        <Route path='/civil' element={<Civil></Civil>}></Route>
        <Route path='/coe' element={<Coe></Coe>}></Route>
        <Route path='/ece' element={<Ece></Ece>}></Route>
        <Route path='/ee' element={<Ee></Ee>}></Route>
        <Route path='/mech' element={<Mech></Mech>}></Route>
        <Route path='/prod' element={<Prod></Prod>}></Route>
      </Routes>
      <div className='foot '>
        <div className="cont foot__cont">
          <div className="foot__1">
            <h4><Link to="/" className='footer_logo'>AcademEase</Link></h4>
            <p>Your one stop solution for <br /> study materials.</p>
          </div>

          <div className="foot__2">
            <h4>Links</h4>
            <ul className="Links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/review">Reviews</Link></li>
              <li><Link to="/aboutus">About</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
          <div class="foot__privacy">
            <h4>Privacy</h4>
            <ul class="primacy">
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms And Conditions</Link></li>
            </ul>
          </div>
          <div class="foot__3">
            <h4>Contact Us</h4>
            <div>
              <p>+91 930 456 7890</p>
              <p>AcademEase@gmail.com</p>
            </div>
            <ul class="foot__socials">
              <li><Link to="/"><i class="fa-brands fa-facebook"></i></Link></li>
              <li><Link to="/"><i class="fa-brands fa-instagram"></i></Link></li>
              <li><Link to="/"><i class="fa-brands fa-linkedin"></i></Link></li>
              <li><Link to="/"><i class="fa-brands fa-square-twitter"></i></Link></li>
            </ul>
          </div>
        </div>
        <p class="copyright">Made with <span>&#9829;</span> from NIT Kurukshetra<br/>
        &#169; AcademEase</p>
      </div>
    </div>
  )
}
