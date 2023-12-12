import { Navigate } from "react-router-dom";

const Public = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Public;
