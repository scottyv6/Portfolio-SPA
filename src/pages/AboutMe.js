import React from "react";
//import "./AboutMe.css";
import SVphoto from '../images/SV-Photo.jpg'

export default function AboutMe() {
    return (
        <div class="row" id="about">
            <div class ="heading col-2">
                <h2>About Me</h2>
                <img src={SVphoto} alt="Scott Vidler" />
            </div>
            <div class="block col-8">
                <br />
                <br />
                <br />
                <p>My name is Scott; I am a full stack developer having recently received completed a six 
                    month web development/coding Boot Camp through the University of Western Australia. 
                    My skills include HTML, CSS, Bootstrap, JavaScript, Node.js, React.js, Express.js, SQL, Sequelize, 
                    MongoDB and GraphQL. I have had experience in education and IT infrastructure support. My interests 
                    include reading, cycling, basketball and watching sport. I enjoy spending time with my family and 
                    I have to amazing children, who are now young adults. I look forward to joining a development team 
                    to utilize and improve my coding skills. 
                </p>
            </div>
        </div>
    )
}