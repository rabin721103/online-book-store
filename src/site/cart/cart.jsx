import React from "react";
import "./cart.css";
import { Navbar } from "reactstrap";

function Cart() {
  const cart = localStorage.getItem("cart");
  const cartData = JSON.parse(cart || "[]");
  return (
    <div>
      <div>
        <div className="container-fluid">
          <h3>Your Cart</h3>
          <div className="row">
            <aside className="col-lg-1" />
            <aside className="col-lg-7">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Book</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th
                          scope="col"
                          className="text-right d-none d-md-block"
                          width="200"
                        ></th>
                      </tr>
                    </thead>

                    {cartData.map((cart, index) => {
                      <tbody>
                        <tr>
                          <td>
                            <figure className="itemside align-items-center">
                              <div className="aside">
                                <img
                                  src="https://picsum.photos/300/200"
                                  className="img-sm"
                                />
                              </div>

                              <figcaption className="info">
                                {" "}
                                <a
                                  href="#"
                                  className="title text-dark"
                                  data-abc="true"
                                >
                                  {cart?.book?.title}
                                </a>
                                <p className="text-muted small">
                                  {cart?.book?.author}
                                </p>
                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            {" "}
                            <input
                              type="number"
                              placeholder="Quantity"
                              min="0"
                              required
                            />
                            {/* <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>{" "} */}
                          </td>
                          <td>
                            <div className="price-wrap">
                              {" "}
                              <var className="price">1000</var>{" "}
                              <small className="text-muted">
                                {" "}
                                {cart?.book?.price}{" "}
                              </small>{" "}
                            </div>
                          </td>
                          <td className="text-right d-none d-md-block">
                            {" "}
                            <a
                              data-original-title="Save to Wishlist"
                              title=""
                              href=""
                              className="btn btn-light"
                              data-toggle="tooltip"
                              data-abc="true"
                            >
                              {" "}
                              <i className="fa fa-heart"></i>
                            </a>{" "}
                            <a
                              href=""
                              className="btn btn-light"
                              data-abc="true"
                            >
                              {" "}
                              Remove
                            </a>{" "}
                          </td>
                        </tr>
                      </tbody>;
                    })}
                  </table>
                </div>
              </div>
            </aside>
            <aside className="col-lg-3">
              <div className="card mb-3">
                <div className="">
                  <div className="summary">
                    <h3>Summary</h3>
                    <div className="summary-item">
                      <span className="text">Subtotal(Nrs.)</span>
                      <span className="price">3600</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Discount(Nrs.)</span>
                      <span className="price">200</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Shipping(Nrs.)</span>
                      <span className="price">50</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Total(Nrs.)</span>
                      <span className="price">3450</span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Checkout
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Back to Homepage
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
