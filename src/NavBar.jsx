import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <h1>EYESHOE</h1>
      </div>

      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to={"/"} className="nav-link px-2 text-white">
                  COLLECTION
                </Link>
              </li>
              <li>
                <Link to={"/men"} className="nav-link px-2 text-white">
                  MEN
                </Link>
              </li>
              <li>
                <Link to={"/women"} className="nav-link px-2 text-white">
                  WOMEN
                </Link>
              </li>
              <li>
                <Link to={"/sale"} className="nav-link px-2 text-white">
                  SALE
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link px-2 text-white">
                  CONTACT
                </Link>
              </li>
            </ul>

            <div className="text-end">
              <Link
                to={"/login"}
                type="button"
                className="btn btn-outline-light me-2"
              >
                Login
              </Link>
              <Link to={"/register"} type="button" className="btn btn-warning">
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;
