import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm px-3 py-3" style={{  backgroundColor: '#062677ff'}}>
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand fs-3 fw-semibold text-white text-decoration-none">Shoppiee</Link>

        {/* Toggler for small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search box */}
          <form className="d-flex mx-lg-auto my-3 my-lg-0 position-relative" role="search" style={{ width: '100%', maxWidth: '500px' }}>
            <RiSearchLine className="position-absolute" style={{ top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#333', zIndex: 2 }} />
            <input
              className="form-control ps-5"
              type="search"
              placeholder="Search Items"
              aria-label="Search"
              style={{ minWidth: '100%' }}
            />
          </form>

          {/* Nav Links */}
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-lg-3 mt-3 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/carts" className="nav-link text-white">Cart</Link>
            </li>
            <li className="nav-item">
              <Link to={'/posts/categories'} className="nav-link text-white">Categories</Link >
            </li>
            <li className="nav-item d-flex align-items-center">
              
              <span className="nav-link text-white"><FaRegCircleUser className="me-1" />Login / SignUp</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
