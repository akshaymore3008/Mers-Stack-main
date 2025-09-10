import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="col-md-12 text-center"></div>
            <button className="mx-5"> Log Out</button>
            <button className="mx-5"> Edit Profile</button>
            <button className="mx-5"> Delete Profile</button>
          </div>
        </div>
        <div className="row my-4 py-4">
          <h2 className="text-center">Profile Details</h2>
          <div className="col-md-6 py-4">
            <div>
              <ul>
                <li>username :- Akshay More</li>
                <li>full name :- Akshay Shakar More</li>
                <li>email :- morea1997@gmail.com</li>
                <li>phone number :-9552414826</li>
                <li>password :- Akshay@123</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png"
              alt="Profile"
              className="text-center w-25"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
