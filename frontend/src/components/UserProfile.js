import React from 'react'
import { Link } from 'react-router-dom'
import { Toast,toast } from 'react-hot-toast'
import { useDispatch,useSelector } from 'react-redux'


export default function UserProfile() {
  // const isLoggedIn=useSelector(state=>state.LoggedIn.value);
  const dispatch=useDispatch();
   function clickHandler(){
    
    toast.error("Succesfully Logged out")
   }
  return (
    <div className='flex flex-col dropdown-profile'>
     <ul>
        <li ><Link to='/user/profile' className='transition ease-in-out delay-150  hover:text-lg'>Profile</Link></li>
        <li ><Link to='/user/setting' className='transition ease-in-out delay-150  hover:text-lg'>Setting</Link></li>
        <li ><Link to='/' onClick={clickHandler} className='transition ease-in-out delay-150  hover:text-lg'>Logout</Link></li>
     </ul>
    </div>
  )
}