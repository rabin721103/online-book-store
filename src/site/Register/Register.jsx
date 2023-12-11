import { useState } from "react";
import "./Register.css";
import axiosInstance from "../../../axiosInstance";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/api/auth/register", formData);
      console.log(response.data); // You can handle success response here
    } catch (error) {
      console.error("Registration failed", error);
      // Handle error, show a message to the user, etc.
    }
  };
  return (
    <body>
      <div className="body-a">
        <div className="container">
          <div className="center">
            <h1>Register Here</h1>
            <form onSubmit={handleSubmit}>
              <div className="txt_field">
                <input type="text" name="name" required />
                <span></span>
                <label>Name</label>
              </div>
              <div className="txt_field">
                <input type="email" name="email" required />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field">
                <input type="password" name="password" required />
                <span></span>
                <label>Password</label>
              </div>
              <input name="submit" type="Submit" value="Sign Up" />
              <div className="signup_link">
                Have an Account ? <a href="login">Login Here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Register;
