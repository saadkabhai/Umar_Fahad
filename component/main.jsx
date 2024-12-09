'use client'
import React, { useEffect, useRef, useState } from 'react'
import './main.css'

export default function Main() {
    const [educationcontentheights, seteducationcontentheights] = useState([])
    const [second_animation_element_number, setsecond_animation_element_number] = useState(0)
    const scrollRef = useRef(null);
    const rotateskilldice = () => {
        const dice = document.querySelector('.skills')
        const front = document.querySelector('.front')
        const back = document.querySelector('.back')
        const top = document.querySelector('.top')
        const bottom = document.querySelector('.bottom')
        front.innerHTML = 'a'
        top.innerHTML = ''
        back.innerHTML = ''
        dice.style.transition = "0s ease-in-out";
        setTimeout(() => {
            dice.style.transform = "rotateX(0deg) rotateY(0deg)";
        }, 500);
        setTimeout(() => {
            bottom.innerHTML = 'b'
        }, 500);
        setTimeout(() => {
            dice.style.transition = "0.5s ease-in-out";
            dice.style.transform = "rotateX(90deg) rotateY(0deg)";
        }, 2500);
        setTimeout(() => {
            front.innerHTML = ''
            back.innerHTML = 'c'
            dice.style.transform = "rotateX(180deg) rotateY(0deg)";
        }, 5000);
        setTimeout(() => {
            bottom.innerHTML = ''
            top.innerHTML = 'd'
            dice.style.transform = "rotateX(270deg) rotateY(0deg)";
        }, 7500);
        setTimeout(() => {
            back.innerHTML = ''
            front.innerHTML = 'e'
            dice.style.transform = "rotateX(360deg) rotateY(0deg)";
        }, 10000);
        setTimeout(() => {
            top.innerHTML = ''
            bottom.innerHTML = 'a'
            dice.style.transform = "rotateX(450deg) rotateY(0deg)";
        }, 12500);
    }
    const getheight = () => {
        const ecards = document.querySelectorAll('.ecard')
        const education_section = document.querySelector('.education-section')
        let heights = []
        let index = 0
        ecards.forEach(item => {
            const content = item.querySelector('.content')
            content.style.padding = '10px'
            const computedvalue = window.getComputedStyle(content)
            const height = computedvalue.getPropertyValue('height');
            let integerheight = height.substring(0, height.length - 2)
            integerheight = parseInt(integerheight, 10)
            integerheight = integerheight + 20
            heights[index] = integerheight
            content.style.padding = '0px'
            content.style.height = '0px'
            index++
        })
        education_section.style.opacity = 1
        seteducationcontentheights(heights)
    }
    const openeducationcard = (e) => {
        const ecards = document.querySelectorAll('.ecard')
        ecards.forEach(item => {
            item.classList.remove('active')
            const content = item.querySelector('.content')
            content.style.height = '0px'
            content.style.padding = '0px'
            content.style.transition = '0.2s ease-in-out';
        })
        const index = parseInt(e.target.id, 10)
        const container = document.getElementById(`ecard${index}`)
        if (container) {
            const computedvalue = window.getComputedStyle(container)
            const height = computedvalue.getPropertyValue('height');
            const content = container.querySelector('.content')
            if (height == '60px') {
                content.style.padding = '10px'
                content.style.height = `${educationcontentheights[index - 1]}px`
                container.classList.add('active')
            } else {
                content.style.padding = '0px'
                content.style.height = '0px'
                container.classList.remove('active')
            }
        } else {
            console.log('no container found');
        }
        console.log(educationcontentheights);

    }
    const closesidebar = () => {
        const toggle_button = document.querySelector('.toggle')
        const sidebarcomponent = document.querySelector('.sidebarcomponent')
        if (toggle_button.classList.contains('active')) {
            toggle_button.classList.remove('active')
            sidebarcomponent.classList.remove('active')
        }
    }
    const handlescroll = () => {
        const toggle_button = document.querySelector('.toggle')
        const sidebarcomponent = document.querySelector('.sidebarcomponent')
        if (toggle_button.classList.contains('active')) {
            toggle_button.classList.remove('active')
            sidebarcomponent.classList.remove('active')
        }
        const first_animation_element = document.querySelectorAll('.first-animation-element')
        const observer0 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.marginLeft = '0px'
                    entry.target.style.width = '100%'
                    entry.target.style.opacity = 1
                }
            });
        }, { threshold: 0.2 });
        first_animation_element.forEach((item) => {
            observer0.observe(item)
        })
        const second_animation_element = document.querySelectorAll('.second-animation-element')
        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let id = entry.target.id
                    id = parseInt(id, 10)
                    const computedvalue = window.getComputedStyle(entry.target)
                    let transition = computedvalue.transition
                    const firstDurationMatch = transition.split(',')[0].trim().match(/([\d.]+)(s|ms)/);
                    let durationInMs
                    if (firstDurationMatch) {
                        // Extract duration value and convert to milliseconds
                        durationInMs = firstDurationMatch[2] === 's'
                            ? parseFloat(firstDurationMatch[1]) * 1000
                            : parseFloat(firstDurationMatch[1]);
                    }
                    entry.target.style.margin = '0px'
                    entry.target.style.opacity = 1
                    setTimeout(() => {
                        const next_element = document.getElementById(id + 1)
                        if (next_element) {
                            next_element.style.transition = 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out'

                        }

                    }, durationInMs);
                }
            });
        }, { threshold: 0.2 });
        second_animation_element.forEach((item) => {
            observer1.observe(item)
        })
    }
    const landing_page_reveal = () => {
        const landingpageh1s = document.querySelectorAll('.landing-page-h1')
        landingpageh1s.forEach((item) => {
            item.style.margin = '0px'
            item.style.opacity = 1
        })
    }
    useEffect(() => {
        rotateskilldice()
        setInterval(() => {
            rotateskilldice()
        }, 15000);
    })
    useEffect(() => {
        getheight()
        landing_page_reveal()

    }, [])
    return (
        <div onScroll={handlescroll} onClick={closesidebar} className='all-container'>
            <div style={{ marginBottom: 100 }} className="landing-section">
                <div style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out, margin 0.5s ease-in-out', marginTop: '-30px' }} className="description landing-page-h1">
                    <h1>Hi!</h1>
                    <h1>I am Umar</h1>
                    <h1>Fahad</h1>
                    <div className="skills">
                        <div className="face front">a</div>
                        <div className="face back"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
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
                    <div style={{ marginLeft: '30px', opacity: 0, transition: 'opacity 0.7s ease-in-out, margin 0.7s ease-in-out' }} id='22' className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#ec5453' }} className="fa-sharp fa-light fa-globe-stand fa-xl"></i>
                        </div>
                        <div className="skill-name">
                            Web Design
                        </div>
                        <div style={{ backgroundColor: '#e76e6d' }} className="line"></div>
                    </div>
                    <div style={{ marginTop: '-30px', opacity: 0, transition: 'opacity 1.0s ease-in-out, margin 1.0s ease-in-out' }} id='23' className="card second-animation-element">
                        <div className="icon">
                            <i style={{ color: '#fac756' }} className="fa-light fa-database fa-xl"></i>
                        </div>
                        <div className="skill-name">
                            Software
                        </div>
                        <div style={{ backgroundColor: '#c9a24b' }} className="line"></div>
                    </div>
                    <div style={{ marginTop: '-30px', opacity: 0, transition: 'opacity 1.3s ease-in-out, margin 1.3s ease-in-out' }} id='24' className="card second-animation-element">
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
                        <div onClick={openeducationcard} id='1' className="card-header ">
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
                        <div onClick={openeducationcard} id='2' className="card-header">
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
                        <div onClick={openeducationcard} id='3' className="card-header ">
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
                        <div onClick={openeducationcard} id='4' className="card-header">
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
