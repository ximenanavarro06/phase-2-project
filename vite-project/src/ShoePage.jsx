import React, { useEffect, useState } from "react";
import ShoeList from "./ShoeList"

function ShoePage() {
    const [shoes, setShoes] = useState([])

useEffect(()=> {
    fetch ('http://localhost:3000/shoes')
    .then ((r)=> r.json())
    .then((shoes) => setShoes(shoes))
}, [])

    return (
        <main>
           
            <ShoeList shoes={shoes}/>
        </main>
    )
}

export default ShoePage;