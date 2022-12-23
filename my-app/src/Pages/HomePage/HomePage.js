import React from "react";
import Products from "../../components/Products/Products";

function HomePage() {
  return (
    <div>
      <h3>Welcome to Brain Shop</h3>
      <section className="container">
        <div className="row">
          <Products />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
