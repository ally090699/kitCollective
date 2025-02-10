import React from "react";
import Card from "./Card";
import products from "./lists/products";

export default function Products() {
  return (
    <div className="container-fluid">
      <div className="row" id="productsect">
        <h4 id="products-title">
          <span role="img" aria-label="Yarn emoji">🧶</span> Products
        </h4>
        <div className="product-container outer" id="bg">
            {products.map((product) => (
              <div className="col-md-3 col-sm-6" key={product.key}>
                <Card 
                  key={product.key}
                  img={product.img}
                  title={product.title}
                  pcode={product.pcode}
                  desc={product.desc}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
