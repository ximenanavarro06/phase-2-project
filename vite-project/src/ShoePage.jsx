import React, { useEffect, useState } from "react";
import ShoeList from "./ShoeList";
import Search from "./Search";

function ShoePage() {
    const [shoes, setShoes] = useState([]);
    const [search, setSearch] = useState("")

useEffect(()=> {
    fetch ('http://localhost:3000/shoes')
    .then ((r)=> r.json())
    .then((shoes) => setShoes(shoes))
}, [])

const filteredShoes = shoes.filter((shoes)=> 
shoes.name.toLowerCase().includes(search.toLowerCase())
|| shoes.colorway.toLowerCase().includes(search.toLowerCase())
 

)

    return (
        <main>
            <Search search={search} setSearch={setSearch}/>
            <ShoeList shoes={filteredShoes}/>
            
        </main>
    )
}

export default ShoePage;