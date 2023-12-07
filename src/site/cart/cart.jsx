import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCart from "./SingleCart";
import { deleteBookFromCart, editCart } from "../../services/starWarsCharater";
import { emitErrorToast, emitSuccessToast } from "../../toastify/ToastEmitter";

function Cart() {
  const cart = localStorage.getItem("cart");

  const [cartItems, setCartItems] = useState(JSON.parse(cart) || []);
  const [total, setTotal] = useState(0);

  const removeFromCart = async (cartId) => {
    const response = await deleteBookFromCart(cartId);
    if (response?.success) {
      const carts = cartItems?.filter((item) => item?.cartId !== cartId);
      setCartItems(carts);
      emitSuccessToast(response?.message);
    }
  };

  const updateFromCart = async (cartId, quantity) => {
    const response = await editCart(cartId, quantity);
    if (response?.success) {
      let carts = [];

      cartItems?.forEach((item) => {
        if (item?.cartId === cartId) {
          carts.push({ ...item, quantity: quantity });
        } else {
          carts.push(item);
        }
      });
      setCartItems(carts);
      emitSuccessToast(response?.message);
      // window.alert(response?.message);
    } else {
      // window.alert(response?.message);
      emitErrorToast(response.message);
    }
  };

  useEffect(() => {
    if (cartItems) {
      setCartItems(cartItems);

      let totalprice = 0;
      cartItems.forEach((cart) => {
        totalprice += cart?.quantity * cart?.book?.price;
      });

      setTotal(totalprice);
    }
  }, [cartItems]);

  return (
    <div>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-12 col-md-12 col-12">
              <h3 className="display-5 mb-2 text-center">Your Cart</h3>
              <p className="mb-5 text-center">
                <i className="text-info font-weight-bold">{cartItems.length}</i>{" "}
                items in your cart
              </p>
              <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                  <Link to="/cart/checkout">
                    <button
                      disabled={cartItems?.length === 0}
                      className="btn btn-outline-primary mb-4 btn-md pl-5 pr-5"
                      style={{ float: "right" }}
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                  <Link to="/">
                    <button className="btn btn-outline-danger ">
                      <i className="fas fa-arrow-left mr-2"></i>Go Back
                    </button>
                  </Link>
                </div>
              </div>
              <table
                id="shoppingCart"
                className="table table-condensed table-responsive"
              >
                <thead>
                  <tr>
                    <th style={{ width: "60%" }}>Product</th>
                    <th style={{ width: "12%" }}>Price</th>
                    <th style={{ width: "10%" }}>Quantity</th>
                    <th style={{ width: "16%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item, index) => (
                    <SingleCart
                      key={index}
                      cart={item}
                      updateFromCart={updateFromCart}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                </tbody>
              </table>
              <div className="float-right text-right">
                <h4 style={{ display: "inline-block", marginRight: "10px" }}>
                  Subtotal:
                </h4>
                <h2 style={{ display: "inline-block" }}>Rs. {total}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
