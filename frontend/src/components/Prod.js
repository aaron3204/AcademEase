import React from 'react'
import Lottie from 'lottie-react'
import animation from "../assets/Animation - 1710008905948.json"
import prod from '../assets/production.jpg'
export default function Prod() {
  return (
    <div> <section class=" branch__des">
    <div class="left__side">
        <h1>Production Engineering</h1>
        <p>In the Production Engineering program, students acquire a blend of mechanical engineering principles and management skills, enabling them to optimize manufacturing processes, enhance productivity, and contribute to the industry's growth.</p>
        </div>
    <div class="right__side">
        <Lottie animationData={animation}></Lottie>
    </div>
</section>


{/* <!-- notes and pyqs --> */}


<section class="cont notes__pyqs">
    <h3>Notes & PYQs</h3>
    <hr/>
    <div class="semesters">
        <div class="sem__1">
            <div class="vertical"></div>
            <h5>Semester 1</h5>
            <ul>
                <li><a href="">PSPS</a></li>
                <li><a href="">Integral Calculus</a></li>
                <li><a href="">Physics</a></li>
                <li><a href="">Chemistry</a></li>
                <li><a href="">Engineering Practice</a></li>
            </ul>
        </div>
        <div class="sem__1">
            <div class="vertical"></div>
            <h5>Semester 2</h5>
            <ul>
                <li><a href="">PSPS</a></li>
                <li><a href="">Integral Calculus</a></li>
                <li><a href="">Physics</a></li>
                <li><a href="">Chemistry</a></li>
                <li><a href="">Engineering Practice</a></li>
            </ul>
        </div>
        <div class="sem__1">
            <div class="vertical"></div>
            <h5>Semester 3</h5>
            <ul>
                <li><a href="">PSPS</a></li>
                <li><a href="">Integral Calculus</a></li>
                <li><a href="">Physics</a></li>
                <li><a href="">Chemistry</a></li>
                <li><a href="">Engineering Practice</a></li>
            </ul>
        </div>
        <div class="sem__1">
            <div class="vertical"></div>
            <h5>Semester 4</h5>
            <ul>
                <li><a href="">PSPS</a></li>
                <li><a href="">Integral Calculus</a></li>
                <li><a href="">Physics</a></li>
                <li><a href="">Chemistry</a></li>
                <li><a href="">Engineering Practice</a></li>
            </ul>
        </div>
    </div>
    <hr/>
    <div class="semesters">
        <div class="sem__1">
            <div class="vertical"></div>
            <h5>Semester 5</h5>
            <ul>
                <li><a href="">PSPS</a></li>
                <li><a href="">Integral Calculus</a></li>
                <li><a href="">Physics</a></li>
                <li><a href="">Chemistry</a></li>
                <li><a href="">Engineering Practice</a></li>
            </ul>
        </div>
        <div class="sem__1">
            <div class="vertical"></div>
            <h5>Semester 6</h5>
            <ul>
                <li><a href="">PSPS</a></li>
                <li><a href="">Integral Calculus</a></li>
                <li><a href="">Physics</a></li>
                <li><a href="">Chemistry</a></li>
                <li><a href="">Engineering Practice</a></li>
            </ul>
        </div>
        <div class="sem__1">
            <div class="vertical"></div>
            <h5>Semester 7</h5>
            <ul>
                <li><a href="">PSPS</a></li>
                <li><a href="">Integral Calculus</a></li>
                <li><a href="">Physics</a></li>
                <li><a href="">Chemistry</a></li>
                <li><a href="">Engineering Practice</a></li>
            </ul>
        </div>
        <div class="sem__1">
            <div class="vertical"></div>
            <h5>Semester 8</h5>
            <ul>
                <li><a href="">PSPS</a></li>
                <li><a href="">Integral Calculus</a></li>
                <li><a href="">Physics</a></li>
                <li><a href="">Chemistry</a></li>
                <li><a href="">Engineering Practice</a></li>
            </ul>
        </div>
    </div>
</section>


{/* <!-- rating --> */}


<section class="cont rating">
    <h2>Rate Our Notes</h2>
    <div class="rating__cont">
        <p>How was your experience?</p>
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
</section>
</div>
  )
}
