import React from "react";

function ShoeCard({shoe}) {
    const{name, image, price, retailPrice, releaseYear, colorway} = shoe; 


    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Retail Price: {retailPrice}</p>
            <p>Release Year: {releaseYear}</p>
            <p>Colorway: {colorway}</p>
        </li>
    );
}

export default ShoeCard;