'use client'
import React, { useEffect } from 'react'
import './sidebar.css'

export default function Sidebarcomponent() {
    const onclicktogglebutton = (e) => {
        const toggle_button = document.querySelector('.toggle')
        const sidebarcomponent = document.querySelector('.sidebarcomponent')
        if (toggle_button.classList.contains('active')) {
            toggle_button.classList.remove('active')
            sidebarcomponent.classList.remove('active')
        } else {
            sidebarcomponent.classList.add('active')
            toggle_button.classList.add('active')
        }
    }
    const scrolltosection = (sectionclass) => {
        const section = document.querySelector(sectionclass)
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    const set_position_of_toggle = () => {
        const toggle = document.querySelector('.toggle');
        const computedvalue = window.getComputedStyle(toggle);

        const width = parseFloat(computedvalue.width) + 10;

        toggle.style.right = `-${width}px`;

        console.log(`Computed width: ${computedvalue.width}, Right value: -${width}px`);
    };
    useEffect(() => {
        set_position_of_toggle()
    }, [])
    return (
        <div className='sidebarcomponent'>
            <div className="container">
                <div className="pfp-container">
                    <div className="pfp"></div>
                </div>
                <div className="name">
                    <p>Umar Fahad</p>
                </div>
                <ul className='list'>
                    <li className='homelink'>
                        <p onClick={() => scrolltosection('.landing-section')}>Home</p>
                        <div className="line"></div>
                    </li>
                    <li className='aboutlink'>
                        <p onClick={() => scrolltosection('.aboutus-section')}>About</p>
                        <div className="line"></div>
                    </li>
                    <li className='serviceslink'>
                        <p onClick={() => scrolltosection('.services-section')}>Services</p>
                        <div className="line"></div>
                    </li>
                    <li className='educationlink'>
                        <p onClick={() => scrolltosection('.education-section')}>Education</p>
                        <div className="line"></div>
                    </li>
                    <li className='experiencelink'>
                        <p onClick={() => scrolltosection('.experience-section')}>Experience</p>
                        <div className="line"></div>
                    </li>
                    <li className='contactlink'>
                        <p onClick={() => scrolltosection('.contact-section')}>Contact</p>
                        <div className="line"></div>
                    </li>
                </ul>
            </div>
            <div onClick={onclicktogglebutton} className="toggle">
                <div className="bar bar-one"></div>
                <div className="bar bar-two"></div>
                <div className="bar bar-three"></div>
            </div>
        </div>
    )
}
