import React from "react";

export default function Card(props){
    return(
        <div id="card" className="card product inner">
            <img className="card-img-top" src={props.img} alt={`Crochet ${props.title}`}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="product-code">Product Code: {props.pcode}</p>
                <p className="product-description">{props.desc}</p>
                <div className="add-to-cart">
                    <button className="btn btn-outline-success">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}