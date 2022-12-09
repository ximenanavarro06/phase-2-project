
import React from "react"
import {NavLink} from "react-router-dom"

const linkStyles = { 
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    borderColor: "black",
            border: "10px solid",
    color: "white",
    
    
  };

  const linkStyle = { 
    display: "inline-block",
    width: "50px",
    padding: "12px",
    
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    color: "white",
    borderColor: "black",
            border: "10px solid"
  };

function NavBar() {
    return (
      <header>
        <nav className="navigation">
      <div className="navBar">
       
        <NavLink className="routeButton"
          to="/Shoes"
          exact
          style={linkStyles}
          activeStyle={{
            background: "grey"
            
          }}
        >
          Shoes 
        </NavLink>
       
        
        <NavLink className="routeButton"
          to="/YourSales"
          exact
          style={linkStyles}
          activeStyle={{
            background: "grey",
          }}
        >
          Your Sales
        </NavLink>
        
       
        <NavLink className="routeButton"
          to="/Cart"
          exact
          style={linkStyle}
          activeStyle={{
            background: "grey",
          }}
        >
          <div className="cartName">
          🛒
          </div>
        </NavLink>
        
      </div>
      </nav>
      </header>
    );
  }

export default NavBar;