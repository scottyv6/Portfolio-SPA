import React from "react";
//import "./Portfolio.css";

export default function Portfolio() {

    const appItems = [
        {
            heading: "Book Inventory",
            gitlink: "https://github.com/cal750/Book-Inventory",
            link: "https://book-inventoryyy.herokuapp.com/",
            class: "appmain",
            id: "bookApp"
        },
        {
            heading: "Weather Dashboard",
            gitlink: "https://github.com/scottyv6/SLV_WeatherDash",
            link: "https://scottyv6.github.io/super-duper-octo-system/",
            class: "app",
            id: "weatherApp"
        },
        {
            heading: "Day Scheduler",
            gitlink: "https://github.com/scottyv6/SLV_Scheduler",
            link: "https://scottyv6.github.io/SLV_Scheduler/",
            class: "app appdark",
            id: "scheduleApp"
        },
        {
            heading: "SongStar",
            gitlink: "https://github.com/scottyv6/SongStar",
            link: "https://scottyv6.github.io/SongStar/",
            class: "app",
            id: "songApp"
        },
    ]
    return (
        <div class="row">
            {appItems.map((item) => {
                return (
                    <figure class={item.class} id={item.id}> 
                        <a href={item.link} target="_blank" rel="noreferrer"> <h3>{item.heading}</h3> </a>
                        <a href={item.gitlink} target="_blank" rel="noreferrer"> <h4>GitHub Link</h4> </a>
                    </figure>
                )
            })}
            

            
        </div>
        
    )
}