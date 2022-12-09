import React from "react";
import ShoeCard from "./ShoeCard";
import Search from "./Search"


function ShoeList({shoes, onAddToCart, search, setSearch, onRemoveFromCart}) {
    
    const shoeList = shoes.map((shoe) => (
        <ShoeCard 
            key={shoe.id} 
            shoe={shoe} 
            onAddToCart={onAddToCart} 
            onRemoveFromCart={onRemoveFromCart}/>
    ))


    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <div className="cards" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>{shoeList}</div>
        </div>
    );
}

export default ShoeList;