import Input from "./Input";
import Button from "./Button";

function Product(props) {
  const {
    count,
    handlerPlus,
    handlerMinus,
    handlerResetCount,
    price,
    discount,
  } = props;

  return (
    <>
      {/* Start of Counter */}
      <div className="w-96 h-auto card bg-stone-100 shadow-xl rounded-lg p-6 mb-20">
        <div className="text-center">
          <h1>Counter</h1>
          <h1 className="text-7xl font-extrabold text-gray-700 p-5">{count}</h1>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            buttonCSS="btn btn-primary"
            buttonLabel="-"
            buttonFunc={handlerMinus}
          />
          <Button
            buttonCSS="btn btn-secondary"
            buttonLabel="RESET"
            buttonFunc={handlerResetCount}
          />
          <Button
            buttonCSS="btn btn-primary"
            buttonLabel="+"
            buttonFunc={handlerPlus}
          />
        </div>
      </div>
      {/* End of Counter */}

      {/* Start of Price and Discount */}
      <div className="w-96 h-auto card bg-stone-100 shadow-xl rounded-lg p-6 mb-20">
        <div className="text-center">
          <h1>Price</h1>
          <h1 className="text-5xl font-extrabold text-gray-700 p-5">
            ${price}
          </h1>
          <h1 className="text-3xl font-extrabold text-gray-700 p-5">
            % {discount}
          </h1>
        </div>
      </div>
      {/* End of Price and Discount */}
      <div className="w-96 h-auto card bg-stone-100 shadow-xl rounded-lg p-6 mb-20">
        <div className="text-center">
          <h1>Product Input</h1>
        </div>
        <Input />
      </div>
    </>
  );
}

// Props Validation

export default Product;
