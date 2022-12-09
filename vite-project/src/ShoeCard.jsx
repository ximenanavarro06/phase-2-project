import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function ShoeCard({shoe, onAddToCart, onRemoveFromCart}) {
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
        .then ((addedToCart)=> setInCart ? onAddToCart(addedToCart) : onRemoveFromCart(addedToCart))


    }


    return (
        <div className="card" style={{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", width: "40vw", height: "65vh", border: "10px solid", borderColor: "red",margin: "50px", backgroundColor: "white"}}>
            <img style={{height: "27%", width: "38%"}}src={image} alt={name} />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h4 style={{fontSize: "19px"}}>{name}</h4>
            <p><b>Price:</b> {price}</p>
            <p><b>Retail Price:</b> {retailPrice}</p>
            <p><b>Release Year: </b>{releaseYear}</p>
            <p><b>Colorway:</b> {colorway}</p>
            </div>
            <div style={{margin: "5px"}}>
            {inCart ? (
                <button onClick={handleCartChange}>Remove From Cart</button>
            ) : ( <button onClick={handleCartChange}>Add To Cart</button>)}
            </div>
        </div>
    );
}

export default ShoeCard;