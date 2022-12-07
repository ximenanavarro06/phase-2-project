import React from 'react'
import Header from "./Header";
import ShoePage from "./ShoePage";
import CartPage from "./CartPage"
import YourSalesPage from "./YourSalesPage"
import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar"




function App() {
  

  return (
    <div className="app">
            <Header />
          <NavBar />
          <Switch>
            <Route exact path="/Shoes">
              <ShoePage />
            </Route>
            <Route exact path="/YourSales">
              <YourSalesPage />
            </Route>
            <Route exact path="/Cart">
              <CartPage />
            </Route>
          </Switch>
        </div>
  )
}

export default App
