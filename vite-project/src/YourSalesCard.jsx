import React from "react";

function YourSalesCard({yourSale}) {
    const{name, image, price, retailPrice, releaseYear, colorway} = yourSale; 



    return (
        <li className="sale-card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p> {price}</p>
            <p>{retailPrice}</p>
            <p>{releaseYear}</p>
            <p>{colorway}</p>
        </li>
    );
}

export default YourSalesCard;