import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon, faDollarSign } from "@fortawesome/free-solid-svg-icons";

function Input(props) {
  const {
    priceInputLabel,
    productInputLabel,
    inputProductFunc,
    inputPriceFunc,
  } = props;

  const handlerChangeProductName = (event) => {
    inputProductFunc(event.target.value);
  };

  const handlerChangePrice = (event) => {
    // convert (value) string to integer
    inputPriceFunc(event.target.value);
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
            <svg
              className="mx-3"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <FontAwesomeIcon icon={faLemon} />
            </svg>
          </span>

          <input
            type="text"
            value={productInputLabel}
            onChange={handlerChangeProductName}
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
            <svg
              className="mx-3"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <FontAwesomeIcon icon={faDollarSign} />
            </svg>
          </span>

          <input
            type="number"
            value={priceInputLabel}
            onChange={handlerChangePrice}
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {/* <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
      </div>
    </>
  );
}

// Props Validation
Input.propTypes = {
  priceInputLabel: PropTypes.string.isRequired,
  productInputLabel: PropTypes.string.isRequired,
  inputProductFunc: PropTypes.func.isRequired,
  inputPriceFunc: PropTypes.func.isRequired,
};

export default Input;
