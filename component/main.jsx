'use client'
import React, { useEffect, useState } from 'react'
import '../styles/main.css'
import SplitTextJS from 'split-text-js';
import gsap from 'gsap';

export default function Main() {
    return (
        <div className='all-container'>
            <div className="landing-section">
                <div className="description landing-page-h1">
                    <h1>Hi!</h1>
                    <h1>I am Umar</h1>
                    <h1>Fahad</h1>
                    <div style={{ opacity: 0 }} className="skills">
                        <p className='skill-role'>Graphic Design</p>
                        <p className='skill-role'>Web Design</p>
                        <p className='skill-role'>Software Engineer</p>
                        <p className='skill-role'>Application Developer</p>
                    </div>
                </div>
                <div className="image"></div>
            </div>
            <section className="aboutus-section" style={{ marginBottom: 100 }}>
                <p className="firstp first-animation-element">About Me</p>
                <h2 className="first-animation-element">Who Am I?</h2>

                <div className="pararaph first-animation-element">
                    I'm a passionate full-stack web developer with a strong focus on UI/UX design, scalable software, and mobile applications. I help clients bring their digital ideas to life with clean, user-centered solutions.
                </div>

                <div className="pararaph first-animation-element">
                    I specialize in building responsive websites, robust backend systems, and engaging interfaces that deliver real results. Whether you're a startup or a growing business, I bring technical expertise and creative insight to every project.
                </div>

                <div className="cards">
                    <div id="21" className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#369df1' }} className="fa-light fa-lightbulb fa-xl"></i>
                        </div>
                        <div className="skill-name">Graphic Design</div>
                        <div className="line"></div>
                    </div>

                    <div id="22" className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#ec5453' }} className="fa-sharp fa-light fa-globe-stand fa-xl"></i>
                        </div>
                        <div className="skill-name">Web Development</div>
                        <div style={{ backgroundColor: '#e76e6d' }} className="line"></div>
                    </div>

                    <div id="23" className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#fac756' }} className="fa-light fa-database fa-xl"></i>
                        </div>
                        <div className="skill-name">Software Engineering</div>
                        <div style={{ backgroundColor: '#c9a24b' }} className="line"></div>
                    </div>

                    <div id="24" className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#a84cb8' }} className="fa-light fa-mobile fa-xl"></i>
                        </div>
                        <div className="skill-name">Mobile Apps</div>
                        <div style={{ background: '#cc7ada' }} className="line"></div>
                    </div>
                </div>
            </section>

            <div style={{ marginBottom: 100 }} className="services-section">
                <p className='firstp'>What I do?</p>
                <h2 style={{ marginTop: 20 }}>Here are some of my</h2>
                <h2>expertise</h2>
                <div className="cards" style={{ paddingTop: 40 }}>
                    <div className="card">
                        <div className="hexagon">
                            <i className="fa-light fa-lightbulb icon-style"></i>
                        </div>
                        <div className="heading">Creative Solutions</div>
                        <div className="content">We provide unique ideas tailored to your brand and audience.</div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone2">
                            <i className="fa-light fa-database icon-style"></i>
                        </div>
                        <div className="heading">Data Management</div>
                        <div className="content">Secure, scalable, and optimized backend services for your apps.</div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone3">
                            <i className="fa-light fa-mobile icon-style"></i>
                        </div>
                        <div className="heading">Mobile Development</div>
                        <div className="content">Build fast, responsive, and user-friendly mobile apps for Android & iOS.</div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone4">
                            <i className="fa-light fa-layer-group icon-style"></i>
                        </div>
                        <div className="heading">UX/UI Design</div>
                        <div className="content">Designs that offer seamless user experience and clean interfaces.</div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone5">
                            <i className="fa-light fa-database icon-style"></i>
                        </div>
                        <div className="heading">Cloud Integration</div>
                        <div className="content">We help migrate and manage your data securely in the cloud.</div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone6">
                            <i className="fa-light fa-mobile icon-style"></i>
                        </div>
                        <div className="heading">App Optimization</div>
                        <div className="content">Improve app performance and reduce loading time for a smoother experience.</div>
                    </div>
                </div>


            </div>
            <div style={{ marginBottom: 100 }} className="experience-section">
                <p className='firstp'>Experience</p>
                <h2 style={{ marginTop: 20 }}>Work Experience</h2>
                <div className="works">

                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div className="inner-circle" style={{ backgroundColor: '#2c98f0' }}>
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>Full Stack Developer</h2>
                                <span>2017 - 2018</span>
                            </div>
                            <div className="content">
                                <p>Developed and maintained full-stack applications using Node.js, React, and MongoDB. Collaborated with designers and backend engineers to deliver high-quality features on time.</p>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div className="inner-circle" style={{ backgroundColor: '#ec5453' }}>
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>Frontend Developer at SoftTech Co.</h2>
                                <span>2018 - 2019</span>
                            </div>
                            <div className="content">
                                <p>Worked on responsive UI components using React, SASS, and Tailwind CSS. Focused on performance optimization and accessibility across major devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div className="inner-circle" style={{ backgroundColor: '#f9bf3f' }}>
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>System Analyst</h2>
                                <span>2019 - 2020</span>
                            </div>
                            <div className="content">
                                <p>Analyzed and optimized internal systems to improve performance and data flow. Created detailed reports and presented recommendations to stakeholders.</p>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div className="inner-circle" style={{ backgroundColor: '#a84cb8' }}>
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>Creative Designer</h2>
                                <span>2020 - 2021</span>
                            </div>
                            <div className="content">
                                <p>Designed engaging UI/UX for mobile apps and websites. Ensured brand consistency and usability across all platforms.</p>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div className="inner-circle" style={{ backgroundColor: '#2fa499' }}>
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>UI/UX Designer at Envato</h2>
                                <span>2021 - 2022</span>
                            </div>
                            <div className="content">
                                <p>Led the design of multiple marketplace templates and product pages for global users. Conducted user testing to improve engagement and conversions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="ending-point">
                        <div className="line">
                            <div className="circle">
                                <div className="inner-circle"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="contact-section">
                <p className="firstp">Get in Touch</p>
                <h2 style={{ marginTop: 20 }}>Contact</h2>

                <div style={{ marginTop: 20 }} className="cards">

                    <div className="card-container">
                        <div className="card">
                            <i className="fa-sharp fa-light fa-globe-stand fa-2xl"></i>
                        </div>
                        <div className="text">Laptop1520@gmail.com</div> {/* Replace with your real email */}
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <i className="fa-light fa-map fa-2xl"></i>
                        </div>
                        <div className="text">Remote – Based in Pakistan</div> {/* Or use your actual office address */}
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <i className="fa-light fa-phone fa-flip-horizontal fa-2xl"></i>
                        </div>
                        <div className="text">+92 300 1234567</div> {/* Replace with real phone number or support line */}
                    </div>

                </div>
            </div>

        </div>
    )
}
