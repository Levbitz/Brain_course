import React, { useState, useEffect } from "react";

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
          {myProducts.map((item) => {
            console.log(item);
            return (
              <>
                <div className="col l2 s6" key={item.id}>
                  <img
                    className="responsive-img"
                    src={item.image}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Products;
