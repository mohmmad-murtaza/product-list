import React from 'react';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Product STORE</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
