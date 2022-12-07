import React, {useState, useEffect} from "react";
import NewShoeForm from "./NewShoeForm";
import YourSalesList from "./YourSalesList";

function YourSalesPage() {
    const [yourSales, setYourSales] = useState([]);


    useEffect(()=> {
        fetch('http://localhost:4000/yourSales')
        .then((r)=> r.json())
        .then(data => setYourSales(data))
      }, [])

    function handleAddShoe(newShoe) {
        setYourSales([...yourSales, newShoe])
      } 


    return (
     <main> 
        <NewShoeForm onAddShoe={handleAddShoe} />
        <YourSalesList yourSales={yourSales} />
     </main>
    )
}

export default YourSalesPage;