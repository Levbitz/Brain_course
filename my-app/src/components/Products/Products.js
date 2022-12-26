import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [myProducts, setMyProducts] = useState([""]);
  const [loading, setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
    setLoading(false);

    /// fetch(url).then((response) => console.log(response.json));
    // .then((data) => console.log(data));
    // effect
    // return () => {
    //   cleanup
    // };
  }, [""]);

  return (
    <div>
      <h5 className="center">Recent Products</h5>

      {loading && myProducts.length > 0 ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          {myProducts.slice(0, 4).map((item) => {
            console.log(item);
            return (
              <>
                <Link key={item.id} to={`/details/${item.id}`}>
                  <div className="col l3 s6">
                    <img
                      // className="responsive-img"
                      src={item.image}
                      alt={item.title}
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
        </>
      )}
    </div>
  );
}

export default Products;
