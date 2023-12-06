import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import HomePage from "./site/HomePage";
import AdminLayout from "./admin/AdminLayout";
import Login from "./site/Login";
import PageNotFound from "./site/404Page/404Page";
import Register from "./site/Register";
import AdminCheck from "./utils/AdminCheck";
import Protected from "./utils/Protected";
import AddUser from "./admin/components/AddUser";
import AddBook from "./admin/components/AddBook";
import WelcomeDashboard from "./admin/Dashboard/WelcomeDashboard";
import EditUser from "./admin/components/EditUser";
import EditBook from "./admin/components/EditBook";
import BookDashboard from "./admin/Dashboard/BookDashboard";
import UserDashboard from "./admin/Dashboard/UserDashboard";
import Cart from "./site/cart/cart";
import UserLayout from "./admin/components/UserLayout";
import BookDetails from "./site/HomePage/BookDetails";
import OrderTable from "./admin/Orders/OrderTable";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="bookdetails/:id" element={<BookDetails />} />
        </Route>

        <Route
          path="/admin"
          element={
            <AdminCheck>
              <AdminLayout />
            </AdminCheck>
          }
        >
          <Route path="bookdashboard" element={<BookDashboard />} />
          <Route path="welcomedashboard" element={<WelcomeDashboard />} />
          <Route path="userdashboard" element={<UserDashboard />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="edituser/:id" element={<EditUser />} />
          <Route path="editbook/:id" element={<EditBook />} />
          <Route path="addbook" element={<AddBook />} />
          <Route path="order" element={<OrderTable />} />
        </Route>

        <Route
          path="/cart"
          element={
            <Protected>
              <UserLayout />
            </Protected>
          }
        >
          <Route index element={<Cart />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
