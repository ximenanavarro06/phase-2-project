import React from "react";
import YourSalesCard from "./YourSalesCard"

function YourSalesList({yourSales}) {

    console.log(yourSales)

    const yourSalesList = yourSales.map((yourSale) => (
        <YourSalesCard yourSale={yourSale} />
    ))
    
    return (
        <ul className="sale-cards" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>{yourSalesList}</ul>
        
    )
}

export default YourSalesList;