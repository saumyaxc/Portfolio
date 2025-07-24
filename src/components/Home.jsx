import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div style={{
            padding: '20vh 10vw', 
            minHeight: '100vh',
            backgroundColor: '#9AC09D',
            justifyContent: 'center' 
            }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal',marginBottom: '0.3rem'}}>Hello, World! My name is</h1>
            <h1 style={{ fontSize: '4rem', fontWeight: 'normal', margin: '0'}}>Saumya Chourasia</h1>

            <a href="contact" className="home-contact-button"> Contact Me</a>
        </div>
    );
}