import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import headshot from '../assets/images/saumya_headshot.jpg';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-inner">
                <div className="home-content">
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal',marginBottom: '0.3rem', marginTop: 0 }}>Hello, World! My name is</h1>
                    <h1 style={{ fontSize: '4rem', fontWeight: 'normal', margin: '0' }}>Saumya Chourasia</h1>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'normal', marginTop: '0.5rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        I'm&nbsp;
                        <span style={{ fontSize: '2rem', fontWeight: 'normal' }}>
                        <Typewriter
                            words = {[
                                'a Computer Science Student',
                                'an Aspiring Software Engineer',
                                'a Web Developer',
                                'a Problem Solver',
                                'an AI/ML Enthusiast',
                            ]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                        </span>
                    </h2>
                    <a href="contact" className="home-contact-button"> Contact Me</a>
                </div>
                <div className="home-image">
                    <img src={headshot} alt="Saumya Chourasia Headshot" />
                </div>
            </div>
        </div>
    );
}