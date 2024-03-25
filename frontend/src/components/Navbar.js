import React from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/3135768.jpg'
import { useState } from 'react';
import UserProfile from './UserProfile';

import {  useDispatch, useSelector } from 'react-redux';
import ProfileDropdown from './Auth/ProfileDropdown';
export default function Navbar() {
  // const[showProfile,setProfile]=useState(false);
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)

  return (
    <div>
      <nav >
        <div class="cont nav__cont">
          <Link to="/"><h2>AcademEase</h2></Link>
          <ul class="nav-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/jobs">JOBS</Link></li>
            <li><Link to="/review">REVIEWS</Link></li>
            <li><Link to="/aboutus">ABOUT</Link></li>
            <li><Link to="/contactus">CONTACT</Link></li>
          </ul>
          {
            (token===null)&&
          <div class="login ">
            <Link to="/login" class="but">LOG IN</Link>
            <Link to="/signup" class="but">SIGN UP</Link>
          </div>
          }
          {(token!==null)&&
          <ProfileDropdown />
          }
        </div>
      </nav>
    </div>
  )
}
