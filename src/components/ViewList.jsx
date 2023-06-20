//

function ViewList(props) {
  const { list } = props;
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {list.map((listItem) => (
              <tr key={listItem.id}>
                <td>{listItem.id}</td>
                <td>{listItem.name}</td>
                <td>{listItem.price}</td>
                <td>{listItem.quantity}</td>
                <td>{listItem.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewList;
