import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import "./Login.css";
import { useNavigate } from "react-router-dom";

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
      navigate("/admin");
    }
  };

  const handleClick = async () => {
    const response = await axiosInstance
      .post("/auth/login", { username, password })
      .then((res) => res?.data)
      .catch(() => null);

    if (response?.success) {
      localStorage.setItem("token", response?.response);
      getProfile();
    }
  };
  return (
    <div>
      <body>
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
      </body>
    </div>
  );
};

export default Login;
