import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search?.length > 0) {
      setSearch("");
      navigate(`/?query=${search}&page=1`);
    }
  };

  // Function to handle logout

  const handleLogout = () => {
    // Perform logout actions (e.g., clear authentication token, etc.)
    const confirmLogout = window.confirm("Do you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("cart");
      localStorage.removeItem("user");
      // Set isAuthenticated to false
      setUser(null);
      // Navigate to the home page or login page
      navigate("/login");
    }
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
    //eslint-disable-next-line
  }, [localStorage.getItem("cart")]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    //eslint-disable-next-line
  }, [localStorage.getItem("user")]);

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
        <div
          className="container"
          id="navbarSupportedContent"
          style={{ display: "flex" }}
        >
          <ul className="navbar-nav mr-5 nav-tabs nav-justified">
            <li className="nav-item active">
              {/* <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link> */}
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Books
              </Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <p>Cart</p>
                      <p
                        style={{
                          marginLeft: "5px",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        {cart?.length}
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {user?.username}
                  </button>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/profile">
                      View Profile
                    </Link>
                    {user?.role === "ADMIN" && (
                      <Link className="dropdown-item" to="/admin">
                        Admin Dashboard
                      </Link>
                    )}
                  </div>
                </li>
              </>
            )}
            <li className="nav-item">
              {user ? (
                <button
                  className="btn btn-danger nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                type="button"
                onClick={handleSearch}
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
