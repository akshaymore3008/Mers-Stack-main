import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZCq6fOPNLpJQCws7QODSctmxzMRHvch6Ag&s"
              alt=""
              className="instagrtam-icon mb-4"
            />
            <p>Sign up to see photos and videos from your friends.</p>
            <button className="fb-login">Log In With Facebook</button>
           <div className="OR register">
              <span>OR</span>
           <div></div>
</div>
            <form className="login-form">
              <div class="form-group">
                <input
                  type="text"
                  className="form-control my-2 w-200"
                  placeholder="Enter username"
                />
              </div>
               <div class="form-group">
                <input
                  type="email"
                  className="form-control my-2 w-200"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  <br />
                </small>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  className="form-control my -2 w-250"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary  mt-3 login-btn">
                <Link to="/birthday">Sign up </Link>
              </button>

              <hr />

              <div className="text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP6AKFlNa3Afg4RJOp7OtR7RGRrlPE2KbLg&s"
                  alt=""
                  className="logo-google"
                />
              </div>
              <br />
              <button>Log in with Facebook</button>

              <p className="text-center mt-5">Forgot Password</p>
              <p className="text-center">
                Have an account?
                <b>
                  <Link to="/"> Login </Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
