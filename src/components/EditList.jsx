/* eslint-disable react/prop-types */
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLemon,
  faDollarSign,
  faCalculator,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";

function EditList(props) {
  const {
    editItemValue,
    handlerOnChangeName,
    handlerOnChangePrice,
    handlerOnChangeQuantity,
    handlerOnChangeDiscount,
    handlerCancelEdit,
    handlerSubmitEdit,
  } = props;

  const handleEditName = (event) => {
    handlerOnChangeName(event.target.value);
  };

  const handleEditPrice = (event) => {
    handlerOnChangePrice(event.target.value);
  };

  const handleEditQuantity = (event) => {
    handlerOnChangeQuantity(event.target.value);
  };

  const handleEditDiscount = (event) => {
    handlerOnChangeDiscount(event.target.value);
  };

  return (
    <>
      {/* Product Input */}
      <div className="mt-5">
        <label
          htmlFor="product-input"
          className="block text-sm text-gray-500 dark:text-gray-300"
        >
          Product Name
        </label>

        <div className="relative flex items-center mt-2">
          <span className="absolute">
            <svg className="mx-3" height="1em" viewBox="0 0 448 512">
              <FontAwesomeIcon icon={faLemon} />
            </svg>
          </span>

          <input
            type="text"
            value={editItemValue.name}
            onChange={handleEditName}
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {/* <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
      </div>

      {/* Price Input */}
      <div className="mt-5 mb-5">
        <label
          htmlFor="price-input"
          className="block text-sm text-gray-500 dark:text-gray-300"
        >
          Price
        </label>

        <div className="relative flex items-center mt-2">
          <span className="absolute">
            <svg className="mx-3" height="1em" viewBox="0 0 320 512">
              <FontAwesomeIcon icon={faDollarSign} />
            </svg>
          </span>

          <input
            type="number"
            value={editItemValue.price}
            onChange={handleEditPrice}
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {/* <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
      </div>

      {/* Count Input */}
      <div className="mt-5 mb-5">
        <label
          htmlFor="price-input"
          className="block text-sm text-gray-500 dark:text-gray-300"
        >
          Count
        </label>

        <div className="relative flex items-center mt-2">
          <span className="absolute">
            <svg className="mx-3" height="1em" viewBox="0 0 320 512">
              <FontAwesomeIcon icon={faCalculator} />
            </svg>
          </span>

          <input
            type="number"
            value={editItemValue.quantity}
            onChange={handleEditQuantity}
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {/* <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
      </div>

      {/* Discount Input */}
      <div className="mt-5 mb-5">
        <label
          htmlFor="price-input"
          className="block text-sm text-gray-500 dark:text-gray-300"
        >
          Discount
        </label>

        <div className="relative flex items-center mt-2">
          <span className="absolute">
            <svg className="mx-3" height="1em" viewBox="0 0 320 512">
              <FontAwesomeIcon icon={faPercent} />
            </svg>
          </span>

          <input
            type="number"
            value={editItemValue.discount}
            onChange={handleEditDiscount}
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {/* <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
        <div className="flex justify-center space-x-4 mt-5">
          <Button
            buttonLabel="Cancel"
            buttonCSS="btn btn-secondary"
            buttonFunc={handlerCancelEdit}
          />
          <Button
            buttonLabel="Submit"
            buttonCSS="btn btn-primary"
            buttonFunc={handlerSubmitEdit}
          />
        </div>
      </div>
    </>
  );
}

export default EditList;
