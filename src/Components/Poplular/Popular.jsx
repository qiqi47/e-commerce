import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN HOME FURNITURE</h1>
      <hr />
      <section className="popular-item">
        {data_product.map((item, i) => {
          return (
            <div>
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
              {console.log(item)}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Popular;
