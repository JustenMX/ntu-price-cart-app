/* eslint-disable react/prop-types */
//
function Stats(props) {
  const { totalExpense, totalNett, totalSavings } = props;

  return (
    <div className="stats stats-vertical shadow">
      <div className="stat">
        <div className="stat-title">Total Expenses</div>
        <div className="stat-value">${totalExpense}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Total Discounts</div>
        <div className="stat-value">${totalNett}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Total Savings</div>
        <div className="stat-value">${totalSavings}</div>
      </div>
    </div>
  );
}

export default Stats;
