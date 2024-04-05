import React, { useContext, useState } from "react";
import "./Navbar.css";
import icon from "../Assets/icon.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to={"/"}>
          <img style={{ maxWidth: "3rem" }} src={icon} alt="icon"></img>
          <div>
            <span style={{ color: "#A8D5F3" }}>Cozy</span>
            <span style={{ color: "#A98451" }}>Craft</span>
          </div>
        </Link>
        {/* <Link to={"/"}><p>CozyCraft</p></Link> */}
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Home Furniture");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Home Furniture">
            Home Furniture
          </Link>
          {menu === "Home Furniture" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Office Furniture");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Office Furniture">
            Office Furniture
          </Link>
          {menu === "Office Furniture" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Outdoors Furniture");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Outdoors Furniture">
            Outdoors Furniture
          </Link>
          {menu === "Outdoors Furniture" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
