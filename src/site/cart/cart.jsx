import React from "react";
import "./cart.css";
import { Navbar } from "reactstrap";

function Cart() {
  return (
    <div>
      <Navbar />
      <div>
        <h3>Your Cart</h3>
        <div className="container-fluid">
          <div className="row">
            <aside className="col-lg-9">
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
                    <tbody>
                      <tr>
                        <td>
                          <figure className="itemside align-items-center">
                            <div className="aside">
                              <img src="/images/400.jpg" className="img-sm" />
                            </div>
                            <figcaption className="info">
                              {" "}
                              <a
                                href="#"
                                className="title text-dark"
                                data-abc="true"
                              >
                                The Kite Runner
                              </a>
                              <p className="text-muted small">
                                hsajasjhdagsjdgasdah
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          {" "}
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>{" "}
                        </td>
                        <td>
                          <div className="price-wrap">
                            {" "}
                            <var className="price">$10.00</var>{" "}
                            <small className="text-muted"> $9.20 each </small>{" "}
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
                          <a href="" className="btn btn-light" data-abc="true">
                            {" "}
                            Remove
                          </a>{" "}
                        </td>
                      </tr>
                    </tbody>
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
                      <span className="text">Subtotal</span>
                      <span className="price">$360</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Discount</span>
                      <span className="price">$0</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Shipping</span>
                      <span className="price">$0</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Total</span>
                      <span className="price">$360</span>
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
