import React from "react";
import ShoeCard from "./ShoeCard";

function CartPage ({shoes}) {
    const inCartShoes = shoes.filter((shoe)=> shoe.cart);

    const allShoes = inCartShoes.map((shoe)=> (
        <ShoeCard key={shoe.id} shoe={shoe} />
    ))
    return (
        <div>
        <h1>Cart</h1>
        <div>{allShoes}</div>
        </div>
    )
}

export default CartPage;