import { useEffect, useState } from "react";

const SingleCart = ({ cart, updateFromCart, removeFromCart }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (cart) {
      setQuantity(cart?.quantity);
    }
  }, [cart]);

  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              // src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
              src="https://picsum.photos/300/200"
              alt=""
              className="img-fluid d-none d-md-block rounded mb-2 shadow "
            />
          </div>
          <div className="col-md-9 text-left mt-sm-2">
            <h4>{cart?.book?.title}</h4>
            <p className="font-weight-light">{cart?.book?.author}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">{cart?.book?.price * quantity}</td>
      <td data-th="Quantity">
        <input
          type="number"
          min={1}
          className="form-control form-control-lg text-center"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </td>
      <td className="actions" data-th="">
        <div className="text-right">
          <button
            className="btn btn-white border-secondary bg-white btn-md mb-2"
            onClick={() => updateFromCart(cart?.cartId, quantity)}
          >
            <i className="fas fa-sync"></i>Update
          </button>
          <button
            className="btn btn-white border-secondary bg-white btn-md mb-2"
            onClick={() => {
              removeFromCart(cart?.cartId);
            }}
          >
            <i className="fas fa-trash"></i>
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleCart;
