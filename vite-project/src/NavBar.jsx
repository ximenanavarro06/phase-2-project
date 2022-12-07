import React from "react"
import {NavLink} from "react-router-dom"

const linkStyles = { 
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return (
      <div>
        <NavLink
          to="/Shoes"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Shoes 
        </NavLink>
        <NavLink
          to="/YourSales"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Your Sales
        </NavLink>
        <NavLink
          to="/Cart"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Cart
        </NavLink>
      </div>
    );
  }

export default NavBar;