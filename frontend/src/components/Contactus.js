import React from 'react'
import Lottie from 'lottie-react';
import animation from "../assets/Animation - 1710006202936.json"
import './Contactus.css';
import {toast} from "react-hot-toast"
import { FaHome } from "react-icons/fa";
export default function Contactus() {
  function submithandler(){
    toast.success("You Have Succesfully Sent Your Message!")
  }
  return (
    <div className="cont main">
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <div className='flex gap-2 justify-center items-center'>
                <FaHome />
                <div class="topic">Address</div>
              </div>

              <div class="text-one">NIT Kurukshetra</div>
              <div class="text-two">Thanesar, Haryana(136119)</div>
            </div>
            <div class="phone details">
              <i class="ri-smartphone-line" className="font"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+91 62022 14007</div>
              <div class="text-two">+91 93063 17722</div>
            </div>
            <div class="email details">
              <i class="ri-mail-line" className="font"></i>
              <div class="topic">Email</div>
              <div class="text-one">12212032@nitkkr.ac.in</div>
              <div class="text-two">12212028@nitkkr.ac.in</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Contact us </div>
            <p className='' >Feel free to reach out to us via email or phone for
              general inquiries, partnership opportunities, or any other matter related to our educational content. Our
              knowledgeable team is ready to assist you and provide the information you need.</p>
            <form action="#" onSubmit={submithandler}>
              <div class="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div class="input-box message-box">
                <textarea name="text" id="text" cols="30" rows="10" placeholder="Enter your message"></textarea>
              </div>
              <div class="button">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
