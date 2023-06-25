import initialProduct from "../store/initialProduct";

// Reducer Function
export function ProductReducer(state = initialProduct, action) {
  // debugging
  console.log(`ProductReducer state: ${state} and action: ${action}`);
  switch (action.type) {
    // Count Increment
    case "COUNT_INCREMENT": {
      let newState = { ...state };
      newState.count = state.count + 1;
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      console.log(`Plus Count = ${newState}`);
      return newState;
    }
    // Count Decrement
    case "COUNT_DECREMENT": {
      let newState = { ...state };
      newState.count = state.count - 1;
      if (newState.count < 5) {
        newState.discount = 0;
      }
      if (newState.count <= 1) {
        newState.count = 1;
      }
      return newState;
    }
    // Reset
    case "COUNT_RESET": {
      let newState = { ...state };
      newState.count = 1;
      return newState;
    }
    // Product Name
    case "SET_PRODUCT_NAME": {
      return { ...state, productName: action.productName };
    }
    // Product Price
    case "SET_PRODUCT_PRICE": {
      return { ...state, price: action.price };
    }
    default: {
      throw new Error(`productReducer: unknown action ${action.type}`);
    }
  }
}

export default ProductReducer;
