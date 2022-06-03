import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <h1 className="brand">Bookstore CMS</h1>
      <div className="link-items">
        <Link to="/">Books</Link>
        |
        <Link to="/categories">Categories</Link>
      </div>
    </nav>
  </>
);

export default Navbar;
