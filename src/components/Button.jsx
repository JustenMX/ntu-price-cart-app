import PropTypes from "prop-types";
function Button(props) {
  const { buttonLabel, buttonCSS, buttonFunc } = props;
  return (
    <>
      <button className={buttonCSS} onClick={buttonFunc}>
        {buttonLabel}
      </button>
    </>
  );
}

// Props Validation
Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonCSS: PropTypes.string.isRequired,
  buttonFunc: PropTypes.func.isRequired,
};

export default Button;
