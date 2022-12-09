import React from "react";

function YourSalesCard({yourSale}) {
    const{name, image, price, retailPrice, releaseYear, colorway} = yourSale; 



    return (
        <div className="sale-card" style={{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", width: "40vw", height: "65vh"}}>
            <img src={image} alt={name} />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}/>
            <h4 style={{fontSize: "14px"}}>{name}</h4>
            <p> {price}</p>
            <p>{retailPrice}</p>
            <p>{releaseYear}</p>
            <p>{colorway}</p>
        </div>
    );
}

export default YourSalesCard;


// border: "1px solid", borderColor: "black",margin: "10px"
// style={{height: "30%", width: "30%"}}