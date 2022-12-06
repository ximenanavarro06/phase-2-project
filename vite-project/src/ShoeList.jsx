import React from "react";
import ShoeCard from "./ShoeCard";

function ShoeList({shoes}) {
    const shoeList = shoes.map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} />
    ))
    return (
        <ul className="cards">{shoeList}</ul>
    );
}

export default ShoeList;