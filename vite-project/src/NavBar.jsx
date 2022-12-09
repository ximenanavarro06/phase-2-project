import { textAlign } from "@mui/system";
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
      <div className="navBar">
        <div className="shoesRoute">
        <NavLink
          to="/Shoes"
          exact
          style={linkStyles}
          activeStyle={{
            background: "grey"
            
          }}
        >
          Shoes 
        </NavLink>
        </div>
        <NavLink
          to="/YourSales"
          exact
          style={linkStyles}
          activeStyle={{
            background: "grey",
          }}
        >
          Your Sales
        </NavLink>
        <NavLink
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
    );
  }

export default NavBar;