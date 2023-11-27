import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import HomePage from "./site/HomePage";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard/BookDashboard";
import Login from "./site/Login";
import PageNotFound from "./site/404Page/404Page";
import Register from "./site/Register";
import Protected from "./Protected";
import BookDashboard from "./admin/Dashboard/BookDashboard";
import UserDashboard from "./admin/Dashboard/UserDashboard";
import AddUser from "./admin/components/AddUser";
import AddBook from "./admin/components/AddBook";
import WelcomeDashboard from "./admin/Dashboard/WelcomeDashboard";
import EditUser from "./admin/components/EditUser";
import EditBook from "./admin/components/EditBook";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <Protected>
              <AdminLayout />
            </Protected>
          }
        >
          <Route path="welcomedashboard" element={<WelcomeDashboard />} />

          <Route path="bookdashboard" element={<BookDashboard />} />
          <Route path="userdashboard" element={<UserDashboard />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="edituser/:id" element={<EditUser />} />
          <Route path="editbook/:id" element={<EditBook />} />
          <Route path="addbook" element={<AddBook />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
