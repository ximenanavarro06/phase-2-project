import React, {useState, useEffect} from 'react'
import Header from "./Header";
//import ShoePage from "./ShoePage";
import CartPage from "./CartPage"
import YourSalesPage from "./YourSalesPage"
import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar"
import ShoeList from './ShoeList';




function App() {

  const [shoes, setShoes] = useState([]);
    const [search, setSearch] = useState("");

function handleAddToCart(addItemToCart) {
    const itemsInCart = shoes.map((shoe)=> {
        if (shoe.id === addItemToCart.id) {
            return addItemToCart;
        } else {
            return shoe;
        }
    })
    setShoes(itemsInCart);
}

function handleRemoveCart(removeItemFromCart) {
  const removeItem = shoes.filter((shoe) => shoe.id !== removeItemFromCart.id);
  setShoes(removeItem)
  
}
    

    

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
    <div className="app">
           
           <NavBar />
            <Header />

           
          
        
          <Switch>

            <Route exact path="/Shoes">
              <ShoeList 
              shoes={filteredShoes} 
              search={search} setSearch={setSearch} 
              onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveCart}
              />
              
            </Route>

            <Route exact path="/YourSales">
              <YourSalesPage />
            </Route>

            <Route exact path="/Cart">
              <CartPage 
              shoes={shoes} 
              onRemoveFromCart={handleRemoveCart} onAddToCart={handleAddToCart}/>
            </Route>

          </Switch>
          
        </div>
  )
}

export default App
