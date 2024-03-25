import React, { useState } from 'react'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import animation from "../assets/Animation - 1709914625963.json"
import bg from '../assets/Header illustration.jpg'
import khalid from '../assets/khalid.jpg'
import av1 from '../assets/khalid.jpg';
import av2 from '../assets/3135768.jpg'
import av3 from '../assets/zishan.jpg';
import av4 from '../assets/khalid.jpg';
import av5 from '../assets/3135715.jpg';
// import Lottie from 'lottie-react';
// import animation from '../assets/Animation - 1706029398900.json'
import { ReactTyped } from "react-typed";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


export default function Home() {
    const [isActive1, setIsActive1] = useState(false);
    function clickHandler1() {
        setIsActive1(!isActive1);
    }
    const [isActive2, setIsActive2] = useState(false);
    function clickHandler2() {
        setIsActive2(!isActive2);
    }
    const [isActive3, setIsActive3] = useState(false);
    function clickHandler3() {
        setIsActive3(!isActive3);
    }
    const [isActive4, setIsActive4] = useState(false);
    function clickHandler4() {
        setIsActive4(!isActive4);
    }
    const [isActive5, setIsActive5] = useState(false);
    function clickHandler5() {
        setIsActive5(!isActive5);
    }
    const [isActive6, setIsActive6] = useState(false);
    function clickHandler6() {
        setIsActive6(!isActive6);
    }
    return (
        <div>
            <div >
                <header id="top">
                    <div class="cont header__cont">
                        <div class="head__left font-bold">
                            <h1>Fuel <span class="decor">Your</span> Success</h1>
                            <h1>Access <span id='element'><ReactTyped strings={["PYQs", "Notes", "Reviews", "Opportunities"]}
                                typeSpeed={100}
                                loop
                                backSpeed={40}
                                cursorChar="|"
                                showCursor={true}></ReactTyped></span></h1>
                            <h1>Anytime, Anywhere</h1>
                            <p>
                                Now you can access NIT KKR notes and past year question papers on our educational platform. Accessible anytime, anywhere, our user-friendly website is your key to unlocking success in your studies.
                            </p>
                            <Link to="/login" class="main-but">Get Started</Link>
                        </div>
                        <div class="head__right">
                            <Lottie animationData={animation}></Lottie>
                        </div>
                    </div>
                </header>


                <section class="branch">
                    <div class="cont branch__cont">
                        <div class="branch__left font-bold">
                            <h1>Branches</h1>
                            <p>
                                NIT KKR offers several B.Tech UG courses offering in-depth knowledge and opportunities for specialization. One can choose from a range of disciplines, including Computer Science, Mechanical Engineering, Electrical Engineering, and more.
                            </p>
                            <Link to="/login">Learn More</Link>
                        </div>
                        <div class="branch__right">
                            <Link to="/coe">
                                <article class="category">
                                    <span class="category__icon"><i class="fa-solid fa-computer"></i></span>
                                    <h5>COE & IT</h5>
                                    <p>Shape the future with COE & IT: Innovation, Technology, Possibilities.</p>
                                </article>
                            </Link>
                            <Link to="/ece">
                                <article class="category">
                                    <span class="category__icon"><i class="fa-solid fa-microchip"></i></span>
                                    <h5>ECE</h5>
                                    <p>Connect the world through ECE: Signals, Communication, Technological Advancements.</p>
                                </article>
                            </Link>
                            <Link to="/ee">
                                <article class="category">
                                    <span class="category__icon"><i class="fa-solid fa-bolt"></i></span>
                                    <h5>Electrical</h5>
                                    <p>Power the world with EEE: Electricity, Systems, Sustainable Solutions.</p>
                                </article>
                            </Link>
                            <Link to="/civil">
                                <article class="category">
                                    <span class="category__icon"><i class="fa-solid fa-helmet-safety"></i></span>
                                    <h5>Civil</h5>
                                    <p>Build the world around us: Infrastructure, Structures, Sustainable Development.</p>
                                </article>
                            </Link>
                            <Link to="/mech">
                                <article class="category">
                                    <span class="category__icon"><i class="fa-sharp fa-solid fa-gears"></i></span>
                                    <h5>Mechanical</h5>
                                    <p>Engineer the future: Machines, Innovation, Mechanical Systems, Manufacturing.</p>
                                </article>
                            </Link>
                            <Link to="/prod">
                                <article class="category">
                                    <span class="category__icon"><i class="fa-solid fa-diagram-project"></i></span>
                                    <h5>Production</h5>
                                    <p>Transform ideas into reality: Optimization, Efficiency, Manufacturing.</p>
                                </article>
                            </Link>
                        </div>
                    </div>
                </section>


                <section class="faqs">
                    <h1 className='font-bold'>Frequently Asked Questions</h1>
                    <div class="cont faqs__cont">
                        <article className={isActive1 ? 'faq active' : 'faq'} onClick={clickHandler1}>
                            <div className="faq__icon">{!isActive1 ? (<FaAngleDown className=' text-[1.8rem] ' ></FaAngleDown>) : (<FaAngleUp className=' text-[1.8rem] '></FaAngleUp>)}</div>
                            <div className="ques__ans"  >
                                <h4>Are these PYQs sufficient for scoring above 9 CGPA ?</h4>
                                <p>Absolutely! These PYQs are continuesly repeating in coming semester examinations. These questions are important from the POV of learning as well as gaining good scores in exam.</p>
                            </div>
                        </article>
                        <article className={isActive2 ? 'faq active' : 'faq'} onClick={clickHandler2}>
                            <div class="faq__icon">{!isActive2 ? (<FaAngleDown className=' text-[1.8rem] ' ></FaAngleDown>) : (<FaAngleUp className=' text-[1.8rem] '></FaAngleUp>)}</div>
                            <div class="ques__ans">
                                <h4>Do these notes cover all the essential topics for exam ?</h4>
                                <p>Yes! Most of these notes are handwritten, prepared by your own seniors. Thus they are highly authentic and enough from examination point of view.</p>
                            </div>
                        </article>
                        <article className={isActive3 ? 'faq active' : 'faq'} onClick={clickHandler3}>
                            <div class="faq__icon">{!isActive3 ? (<FaAngleDown className=' text-[1.8rem] ' ></FaAngleDown>) : (<FaAngleUp className=' text-[1.8rem] '></FaAngleUp>)}</div>
                            <div class="ques__ans">
                                <h4>There are many topics whose notes are missing. when will we get those as well ?</h4>
                                <p>The notes are updated and added on the site as soon as a new topic is added in syllabus. The topics you are concerned about maybe the newer ones. </p>
                            </div>
                        </article>
                        <article className={isActive4 ? 'faq active' : 'faq'} onClick={clickHandler4}>
                            <div class="faq__icon">{!isActive4 ? (<FaAngleDown className=' text-[1.8rem] ' ></FaAngleDown>) : (<FaAngleUp className=' text-[1.8rem] '></FaAngleUp>)}</div>
                            <div class="ques__ans">
                                <h4>Will you provide the solutions of these PYQs in future ?</h4>
                                <p>Our team is always trying to add value to a student's knowledge. We have plans for providing detailed video solutions of each PYQ from highly experienced faculty in future.</p>
                            </div>
                        </article>
                        <article className={isActive5 ? 'faq active' : 'faq'} onClick={clickHandler5}>
                            <div class="faq__icon">{!isActive5 ? (<FaAngleDown className=' text-[1.8rem] ' ></FaAngleDown>) : (<FaAngleUp className=' text-[1.8rem] '></FaAngleUp>)}</div>
                            <div class="ques__ans">
                                <h4>How do PYQs help us in exams ? What is the plus point of them ?</h4>
                                <p>The PYQs are very essential for having an advance practice of the type of questions that can appear in your upcoming exam. further, these PYQs had been repeating in exams year after year consistently.</p>
                            </div>
                        </article>
                        <article className={isActive6 ? 'faq active' : 'faq'} onClick={clickHandler6}>
                            <div class="faq__icon">{!isActive6 ? (<FaAngleDown className=' text-[1.8rem] ' ></FaAngleDown>) : (<FaAngleUp className=' text-[1.8rem] '></FaAngleUp>)}</div>
                            <div class="ques__ans">
                                <h4>Isn't it beneficial for us to make our own handwritten notes ?</h4>
                                <p>Yes! You should make your own short notes which cover all essential topics in crisp and precise way. But the notes we are providing contains the detailed explanation of the topics in your course. These notes acts as an reference material for students during exams.</p>
                            </div>
                        </article>
                    </div>
                </section>


                <section class="cont testimonials__cont mySwiper">
                    <h1 className='font-bold'>Student's Testimonials</h1>
                    <div class="swiper-wrapper">
                        <article class="testimonial swiper-slide">
                            <div class="avatar">
                                <img src={av1} alt="" />
                            </div>
                            <div class="testi__info">
                                <h5>Tanya</h5>
                                <small>Student</small>
                            </div>
                            <div class="testi__body">
                                <p>
                                    The notes on this website are incredibly detailed and well-organized. They have been a lifesaver for my B.Tech studies, helping me understand complex concepts easily.
                                </p>
                            </div>
                        </article>

                        <article class="testimonial swiper-slide">
                            <div class="avatar">
                                <img src={av2} alt="" />
                            </div>
                            <div class="testi__info">
                                <h5>Moksh</h5>
                                <small>Student</small>
                            </div>
                            <div class="testi__body">
                                <p>
                                    I am extremely impressed with the overall experience on this website. The notes are well-structured, the PYQ collection is extensive, and the user interface is excellent. Highly recommended!
                                </p>
                            </div>
                        </article>

                        <article class="testimonial swiper-slide">
                            <div class="avatar">
                                <img src={av3} alt="" />
                            </div>
                            <div class="testi__info">
                                <h5>Zishan</h5>
                                <small>Student</small>
                            </div>
                            <div class="testi__body">
                                <p>
                                    The PYQ section has been a game-changer for me. Practicing previous year questions has significantly improved my exam performance and boosted my confidence.
                                </p>
                            </div>
                        </article>

                        <article class="testimonial swiper-slide">
                            <div class="avatar">
                                <img src={khalid} alt="" />
                            </div>
                            <div class="testi__info">
                                <h5>Khalid</h5>
                                <small>Student</small>
                            </div>
                            <div class="testi__body">
                                <p>
                                    The quality of the notes is top-notch. They cover all the important topics and are written in a concise yet comprehensive manner, making studying a breeze.
                                </p>
                            </div>
                        </article>

                        <article class="testimonial swiper-slide">
                            <div class="avatar">
                                <img src={av5} alt="" />
                            </div>
                            <div class="testi__info">
                                <h5>Karan</h5>
                                <small>Student</small>
                            </div>
                            <div class="testi__body">
                                <p>
                                    I love how user-friendly the website is. The interface is intuitive, making it easy to navigate through different subjects and find the specific notes or PYQ I need.
                                </p>
                            </div>
                        </article>

                        <article class="testimonial swiper-slide">
            
                        </article>
                    </div>
                    <div class="swiper-pagination"></div>
                </section>

            </div>
        </div>
    )
};
