import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/productContext";

function Products() {
  const { products } = useContext(DataContext);

  console.log(products);

  return (
    <div>
      <h5 className="center">Recent Products</h5>

      {products.slice(0, 4).map((item) => {
        console.log(item);
        return (
          <>
            <Link key={item.id} to={`/details/${item.id}`}>
              <div className="col l3 s6">
                <img
                  // className="responsive-img"
                  src={item.sliders[0]}
                  alt={item.title.slice(0, 10)}
                  width="100"
                  height="100"
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Products;
