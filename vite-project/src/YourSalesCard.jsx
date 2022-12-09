import React from "react";

function YourSalesCard({yourSale}) {
    const{name, image, price, retailPrice, releaseYear, colorway} = yourSale; 



    return (
        <div className="salesCard" style={{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", width: "40vw", height: "65vh", border: "10px solid", borderColor: "red",margin: "50px", backgroundColor: "white"}}>
            <img style={{height: "28%", width: "35%"}}src={image} alt={name} />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}/>
            <h4 style={{fontSize: "19px"}} >{name}</h4>
            <p> <b>Price:</b> {price}</p>
            <p><b>Retail Price:</b>{retailPrice}</p>
            <p><b>Release Year:</b> {releaseYear}</p>
            <p><b>Colorway:</b> {colorway}</p>
        </div>
    );
}

export default YourSalesCard;


// border: "1px solid", borderColor: "black",margin: "10px"
// style={{height: "30%", width: "30%"}}