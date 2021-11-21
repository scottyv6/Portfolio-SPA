import React from "react";
import "./AboutMe.css";
import SVphoto from '../../images/SV-Photo.jpg'

export default function AboutMe() {
    return (
        <div class="row" id="about">
            <div class ="heading">
                <h2>About<br />Me</h2>
                <img src={SVphoto} alt="Scott Vidler" />
            </div>
            <div class="block">
                <p>My name is Scott and I have had experience in education and IT infrstructure support. 
                    I am currently completing a six month coding course with BootCamp Spot through the
                     Universtiy of Western Australia. My aim is to becoming a fullstack developer. </p>
            </div>
        </div>
    )
}