/* eslint-disable react/prop-types */
import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

function Product(props) {
  const { handlerInputSubmit } = props;
  const ctx = useContext(ProductContext);
  return (
    <>
      {/* Start of Counter */}
      <div className="w-96 h-auto card bg-stone-100 shadow-xl rounded-lg p-6 m-10">
        <div className="text-center">
          <h1 className="underline decoration-4 decoration-indigo-500">
            Counter
          </h1>
          <h1 className="text-7xl font-extrabold text-gray-700 p-5">
            {ctx.count}
          </h1>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            buttonCSS="btn btn-primary"
            buttonLabel="-"
            buttonFunc={ctx.handlerMinus}
          />
          <Button
            buttonCSS="btn btn-secondary"
            buttonLabel="RESET"
            buttonFunc={ctx.handlerResetCount}
          />
          <Button
            buttonCSS="btn btn-primary"
            buttonLabel="+"
            buttonFunc={ctx.handlerPlus}
          />
        </div>
      </div>
      {/* End of Counter */}

      {/* Start of Price and Discount */}
      <div className="w-96 h-auto card bg-stone-100 shadow-xl rounded-lg p-6 m-10">
        <div className="text-center">
          <h1 className="underline decoration-4 decoration-indigo-500">
            Product
          </h1>
          <h1 className="text-5xl font-extrabold text-gray-700 p-5">
            {ctx.productName}
          </h1>
          <h1 className="text-5xl font-extrabold text-gray-700 p-5">
            ${ctx.price}
          </h1>
          <h1 className="text-3xl font-extrabold text-gray-700 p-5">
            % {ctx.discount}
          </h1>
        </div>
      </div>
      {/* End of Price and Discount */}

      {/* Start of Price and Product Input */}
      <div className="w-96 h-auto card bg-stone-100 shadow-xl rounded-lg p-6 m-10">
        <div className="text-center">
          <h1 className="underline decoration-4 decoration-indigo-500">
            Product Input
          </h1>
        </div>
        <Input
          productInputLabel={ctx.productName}
          priceInputLabel={ctx.price}
          inputProductFunc={ctx.handlerChangeProductName}
          inputPriceFunc={ctx.handlerChangePrice}
        />
        <Button
          buttonCSS="btn btn-primary"
          buttonLabel="SUBMIT PRODUCT"
          buttonFunc={handlerInputSubmit}
        />
      </div>
      {/* End of Price and Product Input */}
    </>
  );
}

// Props Validation

export default Product;
