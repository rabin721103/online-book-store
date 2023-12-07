import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ background: "#6495ED" }}
      >
        <Link
          className="navbar-brand"
          to="/"
          style={{
            marginLeft: "40px",
            fontSize: "28px",
            textDecoration: "bold",
          }}
        >
          Book Store App
        </Link>
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
          <ul className="navbar-nav mr-5 nav-tabs nav-justified">
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" href="#">
                Books
              </Link> */}
              <Link to="/" className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  View Profile
                </Link>
                <Link className="dropdown-item" to="/">
                  Logout
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Admin Dashboard
                </Link>
              </div>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                Profile
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
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
