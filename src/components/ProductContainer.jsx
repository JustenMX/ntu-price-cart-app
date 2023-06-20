import { useState } from "react";
import Product from "./Product";
import ViewList from "./ViewList";

function ProductContainer() {
  // State Management
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(2.99);
  const [discount, setDiscount] = useState(0);
  const [productName, setProductName] = useState("Banana");

  // Handler for Count Increment
  const handlerPlus = () => {
    setCount((prevCount) => {
      let finalCount = prevCount + 1;
      if (finalCount >= 5) {
        setDiscount(20);
      }
      return finalCount;
    });
  };

  // Handler for Count Decrement
  const handlerMinus = () => {
    setCount((prevCount) => {
      let finalCount = prevCount - 1;
      if (finalCount < 5) {
        setDiscount(0);
      }
      if (finalCount <= 0) {
        return 0;
      }
      return finalCount;
    });
  };

  // Handler for Count Reset
  const handlerResetCount = () => {
    setCount(0);
  };

  // Handler for OnChange event
  const handlerChangeProductName = (value) => {
    setProductName(value);
  };

  const handlerChangePrice = (value) => {
    if (value <= 0) {
      setPrice(0);
    } else {
      setPrice(value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-stone-100">
      <Product
        count={count}
        handlerPlus={handlerPlus}
        handlerMinus={handlerMinus}
        handlerResetCount={handlerResetCount}
        price={price}
        discount={discount}
        productName={productName}
        handlerChangeProductName={handlerChangeProductName}
        handlerChangePrice={handlerChangePrice}
      />
      <ViewList />
    </div>
  );
}

export default ProductContainer;
