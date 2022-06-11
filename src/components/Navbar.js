import React from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../images/contact.png';

const Navbar = () => (
  <>
    <nav className="navbar">
      <h1 className="brand">Bookstore CMS</h1>
      <Link className="home-menu" to="/">Books</Link>
      <Link className="categories-menu" to="/categories">Categories</Link>
      <img className="image-contact" src={contactImage} alt="contact" />
    </nav>
  </>
);

export default Navbar;
