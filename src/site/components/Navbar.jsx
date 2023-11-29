import { useState } from "react";

function Navbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "#6495ED" }}
      >
        <a
          className="navbar-brand"
          href="/"
          style={{
            marginLeft: "40px",
            fontSize: "28px",
            textDecoration: "bold",
          }}
        >
          Book Store App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="container"
          id="navbarSupportedContent"
          style={{ display: "flex" }}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="cart">
                Cart
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Fiction
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  ABC
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                TEST
              </a>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  width: "200px",
                  height: "40px",
                }}
              />
              <button
                style={{
                  textDecoration: "bold",
                  marginLeft: "8px",
                  marginBottom: "16px",
                  borderRadius: "0.375rem",
                  width: "80px",
                  height: "40px",
                  color: "white",
                  background: "blue",
                }}
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
