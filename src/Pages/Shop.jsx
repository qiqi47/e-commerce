import React from "react";
import Hero from "../Components/Hero/hero";
import Popular from "../Components/Poplular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <section className="page">
        <Hero />
      </section>
      <section className="page-margin">
        <Popular />{" "}
      </section>
      <section className="page">
        <Offers />
      </section>
      <section className="page-margin">
        <NewCollections />
      </section>
      <section className="page">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Shop;
