import React from "react";
import ShoeCard from "./ShoeCard";
import Search from "./Search"

function ShoeList({shoes, onAddToCart, search, setSearch}) {
    const shoeList = shoes.map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} onAddToCart={onAddToCart}/>
    ))
    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <ul className="cards">{shoeList}</ul>
        </div>
    );
}

export default ShoeList;