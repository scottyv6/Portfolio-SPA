import React from "react";

export default function Resume() {
    return (
        <div class="row" id="about">
            <div class ="heading">
                <h2>Resume</h2>
                <p>Download my Resume</p>
            </div>
            <div class="block">
                <h3>Front-end Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Bootstrap</li>                    
                </ul>

                <h3>Back-end Skills</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Graphql</li>
                </ul>
            </div>
        </div>
    )
}