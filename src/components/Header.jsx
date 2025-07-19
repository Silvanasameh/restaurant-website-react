import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { ShopContext } from "../context/ShopContext"; 

const Navbar = () => {
  const { wishlist, cart } = useContext(ShopContext); 

  return (
    <nav className="navbar navbar-expand-lg sticky-top" aria-label="Main navigation">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/" aria-label="B.Laban Home">
          <img
            src="/images/home-page/logo.png"
            alt="B.Laban Logo"
            className="img-fluid"
          />
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {/* Home */}
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-primary" : "")
                }
              >
                Home
              </NavLink>
            </li>

            {/* About */}
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-primary" : "")
                }
              >
                About us
              </NavLink>
            </li>

            {/* Menu */}
            <li className="nav-item">
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-primary" : "")
                }
              >
                Our menu
              </NavLink>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-primary" : "")
                }
              >
                Contact
              </NavLink>
            </li>

            {/* Search */}
            <li className="nav-item ms-lg-3">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-primary" : "")
                }
                aria-label="Search the Website"
              >
                <i className="fas fa-search"></i>
                <span className="d-lg-none ms-2">Search</span>
              </NavLink>
            </li>

            {/* Wishlist */}
            <li className="nav-item ms-lg-3 position-relative">
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-primary" : "")
                }
                aria-label="View your Wishlist"
              >
                <i className="fas fa-heart"></i>
                {wishlist.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {wishlist.length}
                  </span>
                )}
              </NavLink>
            </li>

            {/* Cart */}
            <li className="nav-item ms-lg-3 position-relative">
           <NavLink
                to="/cart"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-primary" : "")
                }
                aria-label="View your Shopping Basket"
              >
                <i className="fas fa-shopping-basket"></i>
                {cart.length > 0 && (
                  <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">
                    {cart.length}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

