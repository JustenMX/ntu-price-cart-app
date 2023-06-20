//
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

export default Button;
