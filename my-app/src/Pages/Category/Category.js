import React, { useContext } from "react";
import { DataContext } from "../../context/productContext";
import { useParams } from "react-router-dom";

function Category() {
  const { cat } = useParams();
  const { products } = useContext(DataContext);

  return (
    <div>
      <h1>{cat}</h1>
      <div className="container">
        {products
          .filter((item) => {
            return item.category === cat;
          })
          .map((newitem) => {
            return (
              <div key={newitem.id} className="item">
                <h4>{newitem.id}</h4>
                <h4>{newitem.title}</h4>
                <img width={200} height={200} src={newitem.sliders[0]} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Category;
