import React from 'react';
import "./Footer.css";
import background from '../../images/ocean.jpg'

export default function Footer() {
    return (
        <div class="footer" style={{ 
            backgroundImage: `url(${background})` 
          }}>
            <ul class="footerList">
                <li class="footerLink">
                    <a href="https://github.com/scottyv6" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li class="footerLink">
                    <a href="https://www.linkedin.com/in/scott-vidler-77a057218/" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
            </ul>
        </div>
    )
}