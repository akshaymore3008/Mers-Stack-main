import React from "react";
import loginimage from "../../assets/login-page-img.png"; 
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="row align-items-center justify-content-center"></div>
          <div className="col-md-6">
            <img src={loginimage} alt="" className="w-75" />
          </div>
          <div className="col-md-6" text-center>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZCq6fOPNLpJQCws7QODSctmxzMRHvch6Ag&s"
              alt=""
              className="instagrtam-icon mb-4"
            />
            <form>
              <div class="form-group">
                <input
                  type="email"
                  className="form-control my-2 w-50"
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
                  className="form-control my -2 w-50"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <br />
              <button type="submit" class="btn btn-primary w-50 my-2">
                Login
              </button>
               <div className="OR">
              <span>OR</span>
           <div></div>
</div>
              <div className="text-center w-50">
                <br />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP6AKFlNa3Afg4RJOp7OtR7RGRrlPE2KbLg&s"
                  alt=""
                  className="instagrtam-icon mb-2"
                />
              </div>

              <p className="text-center w-50">Forgot Password</p>
              <p className="text-center w-50">
                Don't have an account ? <b><Link to="/register"> Sign up </Link> </b>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
