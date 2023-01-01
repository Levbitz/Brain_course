import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const url = "https://api.levbitz.com/ecomm/pdts.json";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setProducts("");
      });
  }, []);

  //console.log(products);

  return (
    <DataContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

//getTotal,
// addCart,
// reduction,
// products,
// cart,
// setCart,
// total,
// setTotal,
// increase,
// removeProduct,
// deleteAll,
// inCart,

// const [cart, setCart] = useState([]);
// const [inCart, setInCart] = useState(false);

// const [total, setTotal] = useState(0);

// //get total
// const getTotal = () => {
//   const res = cart.reduce((prev, item) => {
//     return prev + item.price * item.count;
//   }, 0);
//   setTotal(res);
// };

// //update selected color before adding to cart

// useEffect(() => {
//   localStorage.setItem("total", total);
// }, [total]);

// //persist total to local storage
// useEffect(() => {
//   const total = localStorage.getItem("total");
//   if (total) {
//     setTotal(parseInt(total));
//   }
// }, []);

// const addCart = (id) => {
//   const product = products.find((item) => item._id === id);

//   const productInCart = cart.find((item) => item._id === id);
//   if (productInCart) {
//     //call error toast;
//     setInCart(true);
//     toast.error("Product already in cart");
//   } else {
//     toast.success("Product added to cart");
//     setCart([...cart, product]);
//   }
//   getTotal();
// };

// //reduction
// const reduction = (id) => {
//   const productInCart = cart.find((item) => item._id === id);
//   if (productInCart.count === 1) {
//     alert(
//       "You can not reduce the quantity to less than 1 if you want just delete the product"
//     );
//   } else {
//     productInCart.count -= 1;
//     setCart([...cart]);
//   }
//   getTotal();
// };

// //reduction

// //increase
// const increase = (id) => {
//   const productInCart = cart.find((item) => item._id === id);
//   productInCart.count += 1;
//   setCart([...cart]);
//   getTotal();
// };
// //increase

// //remove product
// const removeProduct = (id) => {
//   const newCart = cart.filter((item) => item._id !== id);
//   toast.info(" 🤔 Product removed from cart");
//   setCart(newCart);
//   getTotal();
// };

// useEffect(() => {
//   const dataCart = JSON.parse(localStorage.getItem("dataCart"));
//   if (dataCart !== null) {
//     setCart(dataCart);
//   }
// }, []);

// //persist data in local storage
// useEffect(() => {
//   localStorage.setItem("dataCart", JSON.stringify(cart));
// }, [cart]);

// //delete all products from local storage
// const deleteAll = () => {
//   localStorage.removeItem("dataCart");
//   setCart([]);
//   getTotal();
// };

// //update total when cart is updated
// useEffect(() => {
//   getTotal();
// });
