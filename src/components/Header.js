import React from 'react';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <header className="p-3 text-bg-info">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img src="" alt="" />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-dark btn btn-outline-warning" > Home</Link> </li>
              <li>
                <Link to="/products" className="nav-link px-2 text-dark btn btn-outline-warning" > Products</Link>
              </li>
              <li>
                <Link to="#"className="nav-link px-2 text-dark btn btn-outline-warning"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#"className="nav-link px-2 text-dark btn btn-outline-warning"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="#" className="nav-link px-2 text-dark btn btn-outline-warning"
                >
                  About
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-white"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/signup" className="btn btn-outline-light me-2">
                Sign-up
              </Link>

              <Link to="/Cart" className="btn btn-outline-light me-2">
                <FaShoppingCart />
                Cart
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
