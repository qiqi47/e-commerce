import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div
        style={{
          margin: "4rem 0",
          textAlign: "center",
        }}
      >
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
      </div>
      <button>Subscribe</button>
    </div>
  );
};

export default NewsLetter;
