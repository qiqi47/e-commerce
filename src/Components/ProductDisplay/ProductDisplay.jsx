import React, { useState, useContext, useEffect } from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

import chair1QR from "../Assets/chair1QR.png";
import chair2QR from "../Assets/chair2QR.png";
import chair3QR from "../Assets/chair3QR.png";
import chair4QR from "../Assets/chair4QR.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  let chairQRCode = () => {
    switch (product.id) {
      case 1:
        return chair1QR;
        break;
      case 2:
        return chair2QR;
        break;
      case 3:
        return chair3QR;
        break;
      case 4:
        return chair4QR;
        break;
      default:
        break;
    }
  };
  const showPopup = () => {
    setPopupVisible(true);
    console.log("popup visible");
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img style={{ objectFit: "cover" }} src={product.image} alt="" />
          <img style={{ objectFit: "cover" }} src={product.image} alt="" />
          <img style={{ objectFit: "cover" }} src={product.image} alt="" />
          <img style={{ objectFit: "cover" }} src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            style={{ objectFit: "cover" }}
            className="productdisplay-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          laudantium possimus aspernatur unde quisquam placeat voluptatum odit
          impedit sit odio tenetur eaque dolorem alias illum neque eligendi,
          suscipit facere id!
        </div>
        <div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div
                className={`size-option ${
                  selectedSize === "S" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("S")}
              >
                S
              </div>
              <div
                className={`size-option ${
                  selectedSize === "M" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("M")}
              >
                M
              </div>
              <div
                className={`size-option ${
                  selectedSize === "L" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("L")}
              >
                L
              </div>
              <div
                className={`size-option ${
                  selectedSize === "XL" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("XL")}
              >
                XL
              </div>
              <div
                className={`size-option ${
                  selectedSize === "XXL" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("XXL")}
              >
                XXL
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        {product.id <= 4 ? (
          <>
            <button onClick={showPopup}>VIEW IN AR</button>
            {isPopupVisible && (
              <div className="popup-container" style={{ textAlign: "center" }}>
                <span className="close-button" onClick={hidePopup}>
                  &times;
                </span>
                <img
                  style={{ height: 300, width: 300 }}
                  src={chairQRCode()}
                  alt="QR Code"
                />
                <p>Scan this QR code to view this product in VR</p>
              </div>
            )}
          </>
        ) : null}

        <p className="productdisplay-right-category">
          <span>Category :</span>
          {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
