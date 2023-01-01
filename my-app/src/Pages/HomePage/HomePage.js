import React from "react";
import { Link } from "react-router-dom";

import Products from "../../components/Products/Products";

const categoryList = [
  {
    name: "men products",
    uri: "men",
  },
  {
    name: "woman products",
    uri: "women",
  },
  {
    name: "Electronics ",
    uri: "electronics",
  },
];

function HomePage() {
  return (
    <div>
      <h3>Welcome to Brain Shop</h3>
      <section className="container">
        <div className="row">
          <div className="col l3">
            {categoryList.map((list) => {
              return (
                <div>
                  <Link to={`category/${list.uri}`}>
                    <h5>{list.name}</h5>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="col l9">
            <Products />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
