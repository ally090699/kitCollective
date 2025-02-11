import React from "react";
import Carousel from "./Carousel";
import img1 from "../assets/carousel-1.jpg"
import img2 from "../assets/carousel-2.jpg"
import img3 from "../assets/carousel-3.jpg"

export default function Homepage(){
    function displayGreeting() { 
        // day-specific message display
        var today = new Date(); 
        var day = today.getDay();
        var msg = "";
    
        if (day == 0) {     //if it is sunday
            msg = "Have a Soft & Snuggly Sunday !"; 
        }
        else if (day == 1) { 
            msg = "Have a Marvelously Made Monday!"; 
        }
        else if (day == 2) { 
            msg = "Have a Tangle-Free Tuesday!"; 
        }
        else if (day == 3) { 
            msg = "Have a Whimsy & Wonderful Wednesday!"; 
        }
        else if (day == 4) { 
            msg = "Have a Threaded Thursday!"; 
        }
        else if (day == 5) { 
            msg = "Have a Fluffy & Fun Friday!"; 
        }
        else if (day == 6) { 
            msg = "Have a Snug & Cozy Saturday!"; 
        }
        document.getElementById("deal-subtitle").innerHTML = msg;
    }
                
    document.addEventListener("DOMContentLoaded", displayGreeting);

    return(
        <div>
            <h2 id="title">Kit Collective</h2>
            <h1 id="deal-subtitle"></h1>
            <Carousel img1={img1} img2={img2} img3={img3}/>
        </div>
    )
}