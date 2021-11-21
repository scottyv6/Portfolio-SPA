import React from "react";
import "./Portfolio.css";

export default function Portfolio() {

    const appItems = [
        {
            heading: "Book Inventory",
            description: "Group Project",
            link: "https://book-inventoryyy.herokuapp.com/",
            class: "appmain",
            id: "bookApp"
        },
        {
            heading: "Weather Dashboard",
            description: "",
            link: "https://scottyv6.github.io/super-duper-octo-system/",
            class: "app",
            id: "weatherApp"
        },
        {
            heading: "Day Scheduler",
            description: "",
            link: "https://scottyv6.github.io/SLV_Scheduler/",
            class: "app",
            id: "scheduleApp"
        },
        {
            heading: "SongStar",
            description: "Group Project",
            link: "https://scottyv6.github.io/SongStar/",
            class: "app",
            id: "songApp"
        },
    ]
    return (
        <div>
            {appItems.map((item) => {
                return (
                    <figure class={item.class} id={item.id}> <a href={item.link} target="_blank" rel="noreferrer">
                        <h3>{item.heading}</h3>
                        <p>{item.description}</p>
                    </a></figure>
                )
            })}
            

            
        </div>
        
    )
}