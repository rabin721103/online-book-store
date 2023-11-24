import { NavLink } from "react-router-dom";
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
        >
          <div className="position-sticky">
            <div
              className="list-group list-group-flush mx-3 mt-4"
              style={{ "a:hover": "red" }}
            >
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 "
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Dashboard</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2"
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Orders</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 "
              >
                <i className="fas fa-lock fa-fw me-3"></i>
                <span>Users</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2"
              >
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>ABCC</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span>Stocks</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-globe fa-fw me-3"></i>
                <span>International</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-building fa-fw me-3"></i>
                <span>Partners</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-calendar fa-fw me-3"></i>
                <span>Calendar</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-users fa-fw me-3"></i>
                <span>Users</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-money-bill fa-fw me-3"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar --> */}

        {/* <!-- Navbar --> */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
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
                autocomplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search"
                style={{ "min-width": "225px" }}
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
      <main style={{ "margin-top": "58px" }}>
        <div className="container pt-4"></div>
      </main>
      {/* <!--Main layout--> */}
    </div>
  );
};

export default AdminSidebar;
