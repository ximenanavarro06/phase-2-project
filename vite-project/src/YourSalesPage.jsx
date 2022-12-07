import React, {useState, useEffect} from "react";
import NewShoeForm from "./NewShoeForm"

function YourSalesPage() {
    const [shoes, setShoes] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:4000/yourSales')
        .then((r)=> r.json())
        .then((shoes) => setShoes(shoes))
      }, [])

    function handleAddShoe(newShoe) {
        setShoes([...shoes, newShoe])
      } 

    return (
     <main> 
        <NewShoeForm onAddShoe={handleAddShoe} />
     </main>
    )
}

export default YourSalesPage;