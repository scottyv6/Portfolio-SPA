import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
// css in js

export default function NavBar() {
    const navItems = [
        {
            title: "About",
            href: "/"
        },
        {
            title: "Portfolio",
            href: "/portfolio",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Resume",
            href: "/resume",
        }
    ];
    return (
        <nav>
            <h1>Scott Vidler</h1>

            <ul>
                {navItems.map((item) => {
                    return (
                        <li>
                            <Link to={item.href}>{item.title}</Link>                            
                        </li>
                    )
                })}
            </ul>            
        </nav>
    )
}
