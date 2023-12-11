import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { emitSuccessToast } from "../../toastify/ToastEmitter";
import { getAllFromCart } from "../../services/starWarsCharater";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const getProfile = async () => {
    const response = await axiosInstance
      .get("/profile")
      .then((res) => res?.data)
      .catch(() => null);

    if (response?.success) {
      localStorage.setItem("user", JSON.stringify(response?.response ?? ""));
      response?.response?.role === "ADMIN" ? navigate("/admin") : navigate("/");
    }
  };

  const handleClick = async () => {
    const response = await axiosInstance
      .post("/auth/login", {
        username: username.trim(),
        password: password.trim(),
      })
      .then((res) => res?.data)
      .catch(() => null);

    if (response?.success) {
      // localStorage.setItem("token", response?.response);
      getAllFromCart();
      getProfile();
      emitSuccessToast(response?.message);
    }
  };

  return (
    <div className="body-a">
      <div className="container">
        <div className="center">
          <h1>Login</h1>
          <form action="" method="POST">
            <div className="txt_field">
              <input
                type="text"
                name="text"
                required
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forget Password?</div>
            <button type="button" onClick={handleClick}>
              {" "}
              Submit{" "}
            </button>
            <div className="signup_link">
              Not a Member ? <a href="Register">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
