import { useState } from "react";
import Product from "./Product";
import ViewList from "./ViewList";

function ProductContainer() {
  // State Management
  const [count, setCount] = useState(0);

  // Handler for Count Increment
  const handlerPlus = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  // Handler for Count Decrement
  const handlerMinus = () => {
    setCount((prevCount) => {
      // conditional statement to prevent negative count
      if (prevCount <= 0) {
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  };

  // Handler for Count Reset
  const handlerResetCount = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-stone-100">
      <h1>PRICE CART APP</h1>
      <Product
        count={count}
        handlerPlus={handlerPlus}
        handlerMinus={handlerMinus}
        handlerResetCount={handlerResetCount}
      />
      <ViewList />
    </div>
  );
}

export default ProductContainer;
