import { useState, useEffect, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import { v4 as uuidv4 } from "uuid";
//
import Product from "./Product";
import ViewList from "./ViewList";
import Stats from "./Stats";
import EditList from "./editList";

function ProductContainer() {
  // use Context object from ProductReducer
  const ctx = useContext(ProductContext);
  // useState
  const [list, setList] = useState([]);
  const [stats, setStats] = useState({});
  const [showEditList, setShowEditList] = useState(false);
  const [editListItem, setEditListItem] = useState([{}]);
  const [isEditingFlag, setIsEditingFlag] = useState(false);

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
    const editList = list.filter((listItem) => listItem.uid === uid);
    setEditListItem(editList[0]);
    setShowEditList(true);
    setIsEditingFlag(true);
  };

  // Handler for EditList Input Changes
  // EditList.name
  const handlerOnChangeName = (value) => {
    const updateName = {
      ...editListItem,
      name: value,
    };
    setEditListItem(updateName);
  };

  // EditList.price
  const handlerOnChangePrice = (value) => {
    const updatePrice = {
      ...editListItem,
      price: value,
    };
    setEditListItem(updatePrice);
  };

  // EditList.quantity
  const handlerOnChangeQuantity = (value) => {
    const updateQuantity = {
      ...editListItem,
      quantity: value,
    };

    setEditListItem(updateQuantity);
  };

  // EditList.discount
  const handlerOnChangeDiscount = (value) => {
    const updateDiscount = {
      ...editListItem,
      discount: value,
    };
    setEditListItem(updateDiscount);
  };

  console.log(editListItem);

  // Handler for EditList Submit Button
  const handlerSubmitEdit = () => {
    const updatedList = list.map((item) => {
      if (item.uid === editListItem.uid) {
        return {
          ...item,
          name: editListItem.name,
          price: editListItem.price,
          quantity: editListItem.quantity,
          discount: editListItem.discount,
        };
      }
      return item;
    });
    setList(updatedList);
    // setIsEditingFlag(false);
    // setEditListItem([{}])
    // setShowEditList(false);
  };

  // Handler for EditList Cancel Button
  const handlerCancelEdit = () => {
    setShowEditList(false);
    setIsEditingFlag(false);
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
      <div className="flex flex-col justify-center items-center bg-stone-200">
        <div className="flex flex-row justify-center items-center">
          <Product handlerInputSubmit={handlerInputSubmit} />
        </div>

        <div className="flex flex-row justify-center items-center mt-8">
          {/* ViewList */}
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
              isEditingFlag={isEditingFlag}
            />
          </div>
          {/* ViewList */}
          {/* EditList */}
          {showEditList && (
            <div className="w-auto h-auto card bg-stone-100 shadow-xl rounded-lg p-6 m-10">
              <div className="text-center mb-2">
                <h1 className="underline decoration-4 decoration-indigo-500">
                  Edit List
                </h1>
                <EditList
                  editItemValue={editListItem}
                  handlerOnChangeName={handlerOnChangeName}
                  handlerOnChangePrice={handlerOnChangePrice}
                  handlerOnChangeQuantity={handlerOnChangeQuantity}
                  handlerOnChangeDiscount={handlerOnChangeDiscount}
                  handlerCancelEdit={handlerCancelEdit}
                  handlerSubmitEdit={handlerSubmitEdit}
                />
              </div>
            </div>
          )}
          {/* EditList */}

          {/* Stats */}
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
          {/* stats */}
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
