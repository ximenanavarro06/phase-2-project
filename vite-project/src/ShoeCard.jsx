import React, {useState} from "react";

function ShoeCard({shoe, onAddToCart}) {
    const{id, name, image, price, retailPrice, releaseYear, colorway, cart} = shoe; 
    const [inCart, setInCart] = useState(cart)

    function handleClick(event) {
        console.log("clicked")

        
    }

    function handleCartChange() {
        setInCart((inCart)=> !inCart);
        fetch(`http://localhost:3000/shoes/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({cart: !cart})
        })
        .then ((r)=> r.json())
        .then ((addedToCart)=> onAddToCart(addedToCart))


    }


    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Retail Price: {retailPrice}</p>
            <p>Release Year: {releaseYear}</p>
            <p>Colorway: {colorway}</p>
            {inCart ? (
                <button onClick={handleCartChange}>Remove From Cart</button>
            ) : ( <button onClick={handleCartChange}>Add To Cart</button>)}
        </li>
    );
}

export default ShoeCard;