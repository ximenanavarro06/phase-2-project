import React from "react";
import ShoeCard from "./ShoeCard";

function CartPage ({shoes, onRemoveFromCart, onAddToCart}) {
    const inCartShoes = shoes.filter((shoe)=> shoe.cart);

    const allShoes = inCartShoes.map((shoe)=> (
        <ShoeCard key={shoe.id} shoe={shoe} onRemoveFromCart={onRemoveFromCart} onAddToCart={onAddToCart}/>
    ))
    return (
        <div>
        <h1>Cart</h1>
        <div>{allShoes}</div>
        </div>
    )
}

export default CartPage;