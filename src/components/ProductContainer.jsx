import { useState } from "react";
import Product from "./Product";
import ViewList from "./ViewList";

function ProductContainer() {
  // State Management
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(2.99);
  const [discount, setDiscount] = useState(0);
  const [productName, setProductName] = useState("Banana");
  const [list, setList] = useState([]);

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

  // Handler for Input Submit
  const handlerInputSubmit = () => {
    const submittedProduct = {
      id: list.length + 1, // Auto-generating count
      name: productName,
      price: price,
      quantity: count,
      discount: discount,
    };
    const updatedList = [...list, submittedProduct];
    setList(updatedList);
    console.log(list);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-stone-200">
        <div className="flex flex-row justify-center items-center">
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
            handlerInputSubmit={handlerInputSubmit}
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="w-auto h-auto card bg-stone-100 shadow-xl rounded-lg p-6 m-10">
            <div className="text-center mb-2">
              <h1>Product List</h1>
            </div>

            <ViewList list={list} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
