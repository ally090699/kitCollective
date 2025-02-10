import React from "react";

export default function Member(props){
    return(
        <div id="member">
            <img src={props.img} class="d-block" alt={`${props.position} Headshot`}/>
            <div>
                <h5 id="teamname">{props.name}</h5>
                <h6 id="teamposition">{props.position}</h6>
                <p id="teambio">{props.bio}</p>
            </div>
        </div>
    );
}