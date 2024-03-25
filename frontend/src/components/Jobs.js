import React from 'react'
import Lottie from 'lottie-react';
import animation from "../assets/Animation - 1710006202936.json"
import './Contactus.css';
import { FaHome } from "react-icons/fa";

function search(){
  console.log('searched');
}

export default function Contactus() {
  return (
    <div className="cont main">
    <section class=" branch__des">
        <div class="left__side">
            <h1>Job and Internship Opportunities</h1>
            <p>This portal aims to serve as a gateway to real-world opportunities for jobs and internships. We provide a myriad of detailed listings for opportunities that will serve as a catalyst for the student's career development. </p>
            </div>
        <div class="right__side">
          <Lottie animationData={animation}></Lottie>
        </div>
    </section>
    <br/>
      <div class="jobs">
      {/* <form> */}
        <select name="option" id="option">
          <option value="job">Job</option>
          <option value="intern">Internship</option>
        </select>
        <select name="field" id="field">
          <option value="webd">Web Development</option>
          <option value="appd">App Development</option>
          <option value="sde">Software Development</option>
          <option value="cybersec">Cyber Security</option>
          <option value="aiml">AI and Machine Learning</option>
        </select>
        <select name="campus" id="campus">
          <option value="offcampus">Off-Campus</option>
          <option value="oncampus">On-Campus</option>
        </select>
        <button value="Submit" onClick={search}>Search</button>
      {/* </form> */}
      </div>
      <div class='jobslist'>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Field</th>
            <th>Type</th>
          </tr>
          <tr>
            <td>Google </td>
            <td><a href='https://buildyourfuture.withgoogle.com/programs/step'>Google STEP</a></td>
            <td>Software Development</td>
            <td>Internship</td>
          </tr>
          <tr>
            <td>Quik Hire</td>
            <td><a href='https://unstop.com/jobs/product-designer-quik-hire-926758'>Quik Hire</a></td>
            <td>Product Development</td>
            <td>Internship</td>
          </tr>
          <tr>
            <td>Gartner</td>
            <td><a href='https://unstop.com/jobs/conference-sales-executive-gartner-927187'>Gartner</a></td>
            <td>App Development</td>
            <td>Job</td>
          </tr>
          <tr>
            <td>Boeing</td>
            <td><a href='https://unstop.com/jobs/associate-part-applicability-specialist-boeing-927209'>Boeing</a></td>
            <td>Manufacturing Engineer</td>
            <td>Job</td>
          </tr>
          <tr>
            <td>KingAsterisk</td>
            <td><a href='https://unstop.com/jobs/digital-marketing-manager-kingasterisk-technologies-927283'>KingAsterisk</a></td>
            <td>Web Development</td>
            <td>Internship</td>
          </tr>
          <tr>
            <td>Renous</td>
            <td><a href='https://unstop.com/jobs/data-analyst-onemagnify-926288'>Renous</a></td>
            <td>Ui/UX Design</td>
            <td>Job</td>
          </tr>
          <tr>
            <td>Mahindra</td>
            <td><a href='https://unstop.com/jobs/amdm-tcf-production-mahindra-group-813884'>Mahindra</a></td>
            <td>Ui/UX Design</td>
            <td>Job</td>
          </tr>
        </table>
      </div>
        
    </div>
  )
}
