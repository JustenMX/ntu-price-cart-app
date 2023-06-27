import { useState, useEffect, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import { v4 as uuidv4 } from "uuid";
//
import Product from "./Product";
import ViewList from "./ViewList";
import Stats from "./Stats";

function ProductContainer() {
  // use Context object from ProductReducer
  const ctx = useContext(ProductContext);
  // useState
  const [list, setList] = useState([]);
  const [stats, setStats] = useState({});

  // Handler for Input Submit
  const handlerInputSubmit = () => {
    const totalCost =
      Math.round(ctx.price * ctx.count * (1.0 - ctx.discount / 100) * 100) /
      100;
    const discountedAmount =
      Math.round((ctx.price * ctx.count - totalCost) * 100) / 100;
    const submittedProduct = {
      uid: uuidv4(), // library used to generate uid
      id: list.length + 1, // Auto-generating count
      name: ctx.productName,
      price: ctx.price,
      quantity: ctx.count,
      discount: ctx.discount,
      discountedAmount: discountedAmount,
      total: totalCost,
    };
    const updatedList = [...list, submittedProduct];
    setList(updatedList);
    console.log(list);
  };

  // Handler for ListItem Delete
  const handlerDeleteListItem = (uid) => {
    const updatedList = list.filter((listItem) => listItem.uid !== uid);
    const updatedListID = updatedList.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    setList(updatedListID);
  };

  // Handler for ListItem Edit
  const handlerEditListItem = (uid) => {
    console.log(`listItem ref List.uid: ${uid} edited`);
  };

  // Calculate total expense whenever the list state changes
  useEffect(() => {
    // calculations with list state dependecy
    const expenseSum = list.reduce((accumulator, object) => {
      return accumulator + object.price * object.quantity;
    }, 0);
    //
    const roundExpenseSum = Math.round(expenseSum * 100) / 100;
    const totalSum = list.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);
    //
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
          <Product handlerInputSubmit={handlerInputSubmit} />
        </div>
        <div className="flex flex-row justify-center items-center mt-8">
          <div className="w-auto h-auto card bg-stone-100 shadow-xl rounded-lg p-6 m-10">
            <div className="text-center mb-2">
              <h1 className="underline decoration-4 decoration-indigo-500">
                Product List
              </h1>
            </div>

            <ViewList
              list={list}
              handlerDeleteListItem={handlerDeleteListItem}
              handlerEditListItem={handlerEditListItem}
            />
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
