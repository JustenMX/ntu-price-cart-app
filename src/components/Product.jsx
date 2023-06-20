import Input from "./Input";
import Button from "./Button";

function Product(props) {
  const { count, handlerPlus, handlerMinus, handlerResetCount } = props;

  return (
    <>
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
        <h1>Product Input</h1>
        <Input />
      </div>
    </>
  );
}

// Props Validation

export default Product;
