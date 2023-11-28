import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div>
      {/* <!--Main Navigation--> */}
      <header>
        {/* <!-- Sidebar --> */}
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
          style={{
            background:
              "background: linear-gradient(120deg, #313941, #302325);",
          }}
        >
          <div className="position-sticky">
            {/* <div
              className="list-group list-group-flush mx-3 mt-4"
              style={{ "a:hover": "red" }}
            >
              <Link
                to="/admin/welcomedashboard"
                className="list-group-item list-group-item-action py-2 "
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Dashboard</span>
              </Link>
              <Link
                to="/admin/userdashboard"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span>List User</span>
              </Link>
              <Link
                to="/admin/bookdashboard"
                className="list-group-item list-group-item-action py-2"
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Book List</span>
              </Link>

              <Link
                to={"/admin/AddUser"}
                className="list-group-item list-group-item-action py-2"
              >
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>Add Users</span>
              </Link>

              <Link
                to="/admin/AddBook"
                className="list-group-item list-group-item-action py-2 "
              >
                <i className="fas fa-lock fa-fw me-3"></i>
                <span>Add Books</span>
              </Link>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-globe fa-fw me-3"></i>
                <span>Cart</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-building fa-fw me-3"></i>
                <span>Orders</span>
              </a>
            </div> */}

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

              <div className="dropdown-menu" aria-labelledby="userDropdown">
                <Link to="/admin/" className="dropdown-item">
                  List Orders
                </Link>
                <Link to="/admin/" className="dropdown-item">
                  Manage Orders
                </Link>
              </div>
              {/* Reviews and Ratings  */}
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
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar --> */}

        {/* <!-- Navbar --> */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
          style={{ background: "linear-gradient(120deg, #007bff, #d0314c)" }}
        >
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
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

            {/* <!-- Brand --> */}
            <a className="navbar-brand" href="#">
              <img
                src="../images/logo.png"
                height="25"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* <!-- Search form --> */}

            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search"
                style={{ minWidth: "225px" }}
              />
              <span className="input-group-text border-0">
                <i className="fas fa-search"></i>
              </span>
            </form>

            {/* <!-- Right links --> */}
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* <!-- Notification dropdown --> */}
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

              {/* <!-- Avatar --> */}
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
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </header>
      {/* <!--Main Navigation--> */}

      {/* <!--Main layout--> */}
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
      </main>
      {/* <!--Main layout--> */}
    </div>
  );
};

export default AdminSidebar;
