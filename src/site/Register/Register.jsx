import "./Register.css";

const Register = () => {
  return (
    <body>
      <div className="body-a">
        <div className="container">
          <div className="center">
            <h1>Register Here</h1>
            <form method="POST" action="">
              <div className="txt_field">
                <input type="text" name="name" required />
                <span></span>
                <label>Name</label>
              </div>
              <div className="txt_field">
                <input type="phone" name="phone" required />
                <span></span>
                <label>Phone</label>
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
              <div className="txt_field">
                <input type="password" name="cpassword" required />
                <span></span>
                <label>Confirm Password</label>
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
