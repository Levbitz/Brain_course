import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    // return () => {
    //   cleanup
    // };
  }, [id]);

  console.log(product);

  return (
    <div className="container">
      <h5>Product Details</h5>

      <h4>{id}</h4>

      {product ? (
        <>
          <h3>{product.title}</h3>
          <img width={200} height={200} src={product.image} alt="" />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </>
      ) : null}
    </div>
  );
}

export default DetailsPage;
