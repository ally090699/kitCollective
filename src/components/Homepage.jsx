import React from "react";
import Carousel from "./Carousel";
import img1 from "../assets/carousel-1.jpg"
import img2 from "../assets/carousel-2.jpg"
import img3 from "../assets/carousel-3.jpg"

export default function Homepage(){
    return(
        <div>
            {/*<a name="top" id="s1"></a>*/}
            <h2 id="title">Kit Collective</h2>
            {/*<h1 id="deal-subtitle"></h1>*/}
            <Carousel img1={img1} img2={img2} img3={img3}/>
        </div>
    )
}