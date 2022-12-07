import React from "react";
import YourSalesCard from "./YourSalesCard"

function YourSalesList({yourSales}) {

    console.log(yourSales)

    const yourSalesList = yourSales.map((yourSale) => (
        <YourSalesCard yourSale={yourSale} />
    ))
    
    return (
        <ul className="sale-cards">{yourSalesList}</ul>
        
    )
}

export default YourSalesList;