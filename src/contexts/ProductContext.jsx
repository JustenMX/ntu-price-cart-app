/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import ProductReducer from "../hooks/ProductReducer";
import initialProduct from "../util/initialProduct";

const ProductContext = createContext();

// eslint-disable-next-line no-unused-vars
export function ProductProvider({ children }) {
  // import and utilization of ProductReducer
  const [state, dispatch] = useReducer(ProductReducer, initialProduct);
  // handlers
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
    dispatch({ type: "SET_PRODUCT_PRICE", price: +value });
  };

  // create a context object that will be used by all components wrapped by the provider
  const context = {
    count: state.count,
    handlerPlus: handlerPlus,
    handlerMinus: handlerMinus,
    handlerResetCount: handlerResetCount,
    price: state.price,
    discount: state.discount,
    productName: state.productName,
    handlerChangeProductName: handlerChangeProductName,
    handlerChangePrice: handlerChangePrice,
  };

  // render the provider content
  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
