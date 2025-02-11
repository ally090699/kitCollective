import React from "react";
import teammembers from "./lists/teammembers";
import img1 from "../assets/about-1.jpg";
import img2 from "../assets/about-2.jpg";

import Member from "./Member";

export default function About(){
    function scrollFunction() {
        //enhanced parallax
        var scroll = window.scrollY;
        var outer = document.getElementById("memberlist");
        var m = -0.5;
        var b = 0;
        
        var newTop = m*scroll + b;
        
        outer.style.backgroundPositionY = newTop + "px";
    }

    return(
        <div class="container-fluid w-100"  onScroll={scrollFunction}>
            <section id="aboutsect">
                <div data-bs-offset="0" >
                    <h4 id="about-title"><span role="img" aria-label="Girl emoji">👩🏻</span> About Us</h4>
                    <div class="aboutsect-content">
                        <img src={img1} class="aboutsect-image" alt="Sample Summer Top Crochet Kit Contents"/>
                        <div class="aboutsect-text">
                            <p>Welcome to Kit Collective, your go-to destination for all things crochet!</p>
                            <p>We’re dedicated to inspiring every crafter with our thoughtfully curated crochet kits designed for all skill levels. From cozy hats and scarves to fun amigurumi keychains and trendy summer tops, our kits include everything you need, including high-quality materials and step-by-step instructions to help you create pieces you’ll love.</p>
                            <p>At Kit Collective, we encourage you to share your journey! Submit photos of your crochet kit creations to be featured on our website and social media!</p>
                        </div>
                        <img src={img2} class="aboutsect-image" alt="Sample Scrunchie Crochet Kit Complete"/>
                    </div>
                </div>
            </section>
            <section id="aboutteam">
                <div>
                    <h4 id="team-title">Our Team</h4>
                    <div id="memberlist" class="parallax-img">
                        {teammembers.map((member, index) => (
                            <Member 
                                key={member.key}
                                img={member.img}
                                name={member.name}
                                position={member.position}
                                bio={member.bio}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}