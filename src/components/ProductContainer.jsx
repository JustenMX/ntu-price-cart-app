import { useState, useEffect, useReducer } from "react";
import ProductReducer from "../hooks/ProductReducer";
import initialProduct from "../util/initialProduct";
//
import Product from "./Product";
import ViewList from "./ViewList";
import Stats from "./Stats";

function ProductContainer() {
  // State Management
  // useReducer
  const [state, dispatch] = useReducer(ProductReducer, initialProduct);
  // useState
  const [list, setList] = useState([]);
  const [stats, setStats] = useState({});

  // Handler for Count Increment
  const handlerPlus = () => {
    dispatch({ type: "COUNT_INCREMENT" });
  };

  // Handler for Count Decrement
  const handlerMinus = () => {
    dispatch({ type: "COUNT_DECREMENT" });
  };

  // Handler for Count Reset
  const handlerResetCount = () => {
    dispatch({ type: "COUNT_RESET" });
  };

  // Handler for OnChange event
  const handlerChangeProductName = (value) => {
    dispatch({ type: "SET_PRODUCT_NAME", productName: value });
  };

  const handlerChangePrice = (value) => {
    dispatch({ type: "SET_PRODUCT_PRICE", price: value });
  };

  // Handler for Input Submit
  const handlerInputSubmit = () => {
    const totalCost =
      Math.round(
        state.price * state.count * (1.0 - state.discount / 100) * 100
      ) / 100;
    const discountedAmount =
      Math.round((state.price * state.count - totalCost) * 100) / 100;
    const submittedProduct = {
      id: list.length + 1, // Auto-generating count
      name: state.productName,
      price: state.price,
      quantity: state.count,
      discount: state.discount,
      discountedAmount: discountedAmount,
      total: totalCost,
    };
    const updatedList = [...list, submittedProduct];
    setList(updatedList);
    console.log(list);
  };

  // Calculate total expense whenever the list state changes
  useEffect(() => {
    // calculations with list state dependecy
    const expenseSum = list.reduce((accumulator, object) => {
      return accumulator + object.price * object.quantity;
    }, 0);
    const roundExpenseSum = Math.round(expenseSum * 100) / 100;
    const totalSum = list.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);
    const roundTotalSum = Math.round(totalSum * 100) / 100;
    const savings = Math.round((roundExpenseSum - roundTotalSum) * 100) / 100;
    // debugging
    console.log(roundExpenseSum);
    console.log(roundTotalSum);
    console.log(savings);
    // update Stats state
    setStats((prevStats) => ({
      ...prevStats,
      totalExpense: roundExpenseSum,
      totalNett: roundTotalSum,
      savings: savings,
    }));
  }, [list]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-stone-200">
        <div className="flex flex-row justify-center items-center">
          <Product
            count={state.count}
            handlerPlus={handlerPlus}
            handlerMinus={handlerMinus}
            handlerResetCount={handlerResetCount}
            price={state.price}
            discount={state.discount}
            productName={state.productName}
            handlerChangeProductName={handlerChangeProductName}
            handlerChangePrice={handlerChangePrice}
            handlerInputSubmit={handlerInputSubmit}
          />
        </div>
        <div className="flex flex-row justify-center items-center mt-8">
          <div className="w-auto h-auto card bg-stone-100 shadow-xl rounded-lg p-6 m-10">
            <div className="text-center mb-2">
              <h1 className="underline decoration-4 decoration-indigo-500">
                Product List
              </h1>
            </div>

            <ViewList list={list} />
          </div>
          <div className="w-auto h-auto card bg-stone-100 shadow-xl rounded-lg p-6 m-10">
            <div className="text-center mb-2">
              <h1 className="underline decoration-4 decoration-indigo-500">
                Stats
              </h1>
            </div>

            <Stats
              totalExpense={stats.totalExpense}
              totalNett={stats.totalNett}
              totalSavings={stats.savings}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
