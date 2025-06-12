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
            <div style={{ marginBottom: 100 }} className="aboutus-section">
                <p style={{ marginLeft: '-30px', opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out' }} className='firstp first-animation-element'>About us</p>
                <h2 style={{ marginLeft: '-30px', opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out' }} className='first-animation-element'>Who am i?</h2>
                <div style={{ marginTop: 20, marginLeft: '-30px', opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out' }} className="pararaph first-animation-element">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur esse quam at mollitia facere dolore qui nam officiis, incidunt laborum illo optio minima sequi? Eum eligendi velit ex distinctio?
                </div>
                <div style={{ marginLeft: '-30px', opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out' }} className="pararaph first-animation-element">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur esse quam at mollitia facere dolore qui nam officiis, incidunt laborum illo optio minima sequi? Eum eligendi velit ex distinctio?
                </div>
                <div className="cards">
                    <div style={{ marginLeft: '-30px', opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out' }} id='21' className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#369df1' }} className="fa-light fa-lightbulb fa-xl"></i>
                        </div>
                        <div className="skill-name">
                            Graphic Design
                        </div>
                        <div className="line"></div>
                    </div>
                    <div style={{ marginLeft: '30px', opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out' }} id='22' className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#ec5453' }} className="fa-sharp fa-light fa-globe-stand fa-xl"></i>
                        </div>
                        <div className="skill-name">
                            Web Design
                        </div>
                        <div style={{ backgroundColor: '#e76e6d' }} className="line"></div>
                    </div>
                    <div style={{ marginTop: '-30px', opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out' }} id='23' className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#fac756' }} className="fa-light fa-database fa-xl"></i>
                        </div>
                        <div className="skill-name">
                            Software
                        </div>
                        <div style={{ backgroundColor: '#c9a24b' }} className="line"></div>
                    </div>
                    <div style={{ marginTop: '-30px', opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out' }} id='24' className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#a84cb8' }} className="fa-light fa-mobile fa-xl"></i>
                        </div>
                        <div className="skill-name">
                            Application
                        </div>
                        <div style={{ background: '#cc7ada' }} className="line"></div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: 100 }} className="services-section">
                <p className='firstp'>What I do?</p>
                <h2 style={{ marginTop: 20 }}>Here are some of my</h2>
                <h2>expertise</h2>
                <div className="cards" style={{ paddingTop: 40 }}>
                    <div className="card">
                        <div className="hexagon">
                            <i style={{ fontSize: 30 }} className="fa-light fa-lightbulb fa-2xl"></i>
                        </div>
                        <div className="heading">
                            Innovative Ideas
                        </div>
                        <div className="content">
                            Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone2">
                            <i style={{ fontSize: 30 }} className="fa-light fa-database fa-xl"></i>
                        </div>
                        <div className="heading">
                            Innovative Ideas
                        </div>
                        <div className="content">
                            Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone3">
                            <i style={{ fontSize: 30 }} className="fa-light fa-mobile fa-xl"></i>
                        </div>
                        <div className="heading">
                            Innovative Ideas
                        </div>
                        <div className="content">
                            Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone4">
                            <i style={{ fontSize: 30 }} className="fa-light fa-layer-group"></i>
                        </div>
                        <div className="heading">
                            Innovative Ideas
                        </div>
                        <div className="content">
                            Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone5">
                            <i style={{ fontSize: 30 }} className="fa-light fa-database fa-xl"></i>
                        </div>
                        <div className="heading">
                            Innovative Ideas
                        </div>
                        <div className="content">
                            Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </div>
                    </div>
                    <div className="card">
                        <div className="hexagon hexagone6">
                            <i style={{ fontSize: 30 }} className="fa-light fa-mobile fa-xl"></i>
                        </div>
                        <div className="heading">
                            Innovative Ideas
                        </div>
                        <div className="content">
                            Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ marginBottom: 100 }} className="education-section">
                <p className='firstp'>Education</p>
                <h2 style={{ marginTop: 20 }}>Education</h2>
                <div style={{ marginTop: 20 }} className="cards">
                    <div id='ecard1' className="card ecard">
                        <div id='1' className="card-header ">
                            <p>Master Degree Graphic Design</p>
                            <div className="icon">
                                <i className="fa-light fa-plus"></i>
                                <i className="fa-light fa-minus"></i>
                            </div>
                        </div>
                        <div style={{ display: 'flex', height: 'auto' }} className="content">
                            <p style={{ width: '50%' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p style={{ width: '50%' }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div id='ecard2' className="card ecard">
                        <div id='2' className="card-header">
                            <p>Bachelor Degree of Computer Science</p>
                            <div className="icon">
                                <i className="fa-light fa-plus"></i>
                                <i className="fa-light fa-minus"></i>
                            </div>
                        </div>
                        <div style={{ height: 'auto' }} className="content">
                            <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <ul>
                                <li>Separated they live in Bookmarksgrove right</li>
                                <li>Separated they live in Bookmarksgrove right</li>
                            </ul>
                        </div>
                    </div>
                    <div id='ecard3' className="card ecard">
                        <div id='3' className="card-header ">
                            <p>Diploma in Information Technology</p>
                            <div className="icon">
                                <i className="fa-light fa-plus"></i>
                                <i className="fa-light fa-minus"></i>
                            </div>
                        </div>
                        <div style={{ height: 'auto' }} className="content">
                            <p >Far far away, behind the word <strong>mountains</strong> , far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div id='ecard4' className="card ecard">
                        <div id='4' className="card-header">
                            <p>High School Secondary Education</p>
                            <div className="icon">
                                <i className="fa-light fa-plus"></i>
                                <i className="fa-light fa-minus"></i>
                            </div>
                        </div>
                        <div style={{ height: 'auto' }} className="content">
                            <p>Far far away, behind the word <strong>mountains</strong> , far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: 100 }} className="experience-section">
                <p className='firstp' >Experience</p>
                <h2 style={{ marginTop: 20 }}>Work Experience</h2>
                <div className="works">
                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div style={{ backgroundColor: '#2c98f0' }} className="inner-circle">
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>Full Stack Developer <p>&nbsp;2017 - 2018</p></h2>
                            </div>
                            <div className="content">
                                <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div style={{ backgroundColor: '#ec5453' }} className="inner-circle">
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>Front End Developer at Google Company <p>&nbsp;2017 - 2018</p></h2>
                            </div>
                            <div className="content">
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div style={{ backgroundColor: '#f9bf3f' }} className="inner-circle">
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>System Analyst<p>&nbsp;2017 - 2018</p></h2>
                            </div>
                            <div className="content">
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div style={{ backgroundColor: '#a84cb8' }} className="inner-circle">
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>Creative Designer<p>&nbsp;2017 - 2018</p></h2>
                            </div>
                            <div className="content">
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className="line">
                            <div className="circle">
                                <div style={{ backgroundColor: '#2fa499' }} className="inner-circle">
                                    <i className="fa-light fa-pencil"></i>
                                </div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="work-description">
                            <div className="header">
                                <h2>UI/UX Designer at Envato<p>&nbsp;2017 - 2018</p></h2>
                            </div>
                            <div className="content">
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                </p>
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
                <p className='firstp'>Get in touch</p>
                <h2 style={{ marginTop: 20 }}>Contact</h2>
                <div style={{ marginTop: 20 }} className="cards">
                    <div className="card-container">
                        <div className="card">
                            <i className="fa-sharp fa-light fa-globe-stand fa-2xl"></i>
                        </div>
                        <div className="text">example@gmail.com</div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <i className="fa-light fa-map fa-2xl"></i>
                        </div>
                        <div className="text">98 West 21th Street, Suite <br /> 721 New York NY 10016</div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <i className="fa-light fa-phone fa-flip-horizontal fa-2xl"></i>
                        </div>
                        <div className="text">+123 456 789</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
