import { Link, useNavigate } from "react-router-dom";
import "./AdminSidebar.css";
import { useEffect, useState } from "react";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const handleLogout = () => {
    // Perform logout actions (e.g., clear authentication token,. etc)
    const confirmLogout = window.confirm("Do you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      // user(null);
      // Navigate to the home page or login page
      navigate("/");
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    //eslint-disable-next-line
  }, [localStorage.getItem("user")]);

  return (
    <div>
      <header>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
          style={{
            background: "background: linear-gradient(120deg, #313941, #302325)",
          }}
        >
          <div className="position-sticky">
            <div className="dropdown mx-3 mt-4">
              <Link
                to="/admin/welcomedashboard"
                className="list-group-item list-group-item-action py-2 "
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Dashboard</span>
              </Link>

              <button
                className="list-group-item list-group-item-action py-2 ripple dropdown-toggle"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span>Users</span>
              </button>

              <div className="dropdown-menu" aria-labelledby="userDropdown">
                <Link to="/admin/userdashboard" className="dropdown-item">
                  List Users
                </Link>
                <Link to="/admin/adduser" className="dropdown-item">
                  Add Users
                </Link>
              </div>
              {/* Books Section  */}
              <button
                className="list-group-item list-group-item-action py-2 ripple dropdown-toggle"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span>Books</span>
              </button>

              <div className="dropdown-menu" aria-labelledby="userDropdown">
                <Link to="/admin/bookdashboard" className="dropdown-item">
                  List Books
                </Link>
                <Link to="/admin/AddBook" className="dropdown-item">
                  Add Books
                </Link>
              </div>
              {/* Orders Section */}
              <button
                className="list-group-item list-group-item-action py-2 ripple dropdown-toggle"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span>Orders</span>
              </button>

              <div
                className="dropdown-menu"
                aria-labelledby="userDropdown"
                style={{ marginTop: "50px" }}
              >
                <Link to="/admin/order" className="dropdown-item">
                  List Orders
                </Link>
                {/* <Link to="/admin/" className="dropdown-item">
                  Manage Orders
                </Link> */}
              </div>

              <button
                className="list-group-item list-group-item-action py-2 ripple dropdown-toggle"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span>Reviews </span>
              </button>

              <div className="dropdown-menu" aria-labelledby="userDropdown">
                <Link to="/admin/" className="dropdown-item">
                  All Ratings
                </Link>
                <Link to="/admin/" className="dropdown-item">
                  Manage Reviews
                </Link>
              </div>

              <Link to="/" style={{ textDecoration: "none" }}>
                <i className="fa-sharp fa-solid fa-house"></i> Visit User
                Homepage
              </Link>
            </div>
          </div>
        </nav>

        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light  fixed-top"
          style={{ background: "linear-gradient(120deg, #007bff, #d0314c)" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link
            className="navbar-brand"
            style={{
              marginLeft: "20px",
              fontSize: "28px",
              textDecoration: "bold",
            }}
          >
            Book Store App
          </Link>
          {/* <a className="navbar-brand" href="#">
            <img
              src="../images/logo.png"
              height="25"
              alt="MDB Logo"
              loading="lazy"
            />
          </a> */}
          <form className="d-none d-md-flex input-group w-auto my-auto">
            <input
              autoComplete="off"
              type="search"
              className="form-control"
              placeholder="Search"
              style={{ minWidth: "225px" }}
            />
            <span className="input-group-text border-0">
              <i className="fas fa-search"></i>
            </span>
          </form>
          <button
            className="btn btn-danger"
            onClick={handleLogout}
            style={{ color: "white", marginLeft: "20px" }}
          >
            Logout
          </button>
          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item dropdown">
              <a
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-success">
                  1
                </span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="22"
                  alt="Avatar"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
      </main>
    </div>
  );
};

export default AdminSidebar;
