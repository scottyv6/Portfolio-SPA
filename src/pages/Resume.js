import React from "react";
import pdf from "./../docs/Scott_Vidler_Resume.pdf"

export default function Resume() {
    return (
        <div class="row" id="about">
            <div class ="heading">
                <h2>Resume</h2>                
                <a href={pdf}>Download my Resume</a>
                <br />
                <br />
                
                <h3>Front-end Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>React Router</li>
                    <li>Bootstrap</li>                    
                </ul>

                <h3>Back-end Skills</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            <div >
                
            </div>
        </div>
    )
}