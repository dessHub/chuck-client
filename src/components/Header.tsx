import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
 return (
  <header>
   <div className="navbar navbar-dark bg-dark box-shadow">
    <div className="container d-flex justify-content-between">
     <Link to="/" className="navbar-brand d-flex align-items-center">
      <strong>Quotes</strong>
     </Link>
     <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarHeader"
      aria-controls="navbarHeader"
      aria-expanded="false"
      aria-label="Toggle navigation"
     >
      <span className="navbar-toggler-icon" />
     </button>
    </div>
   </div>
  </header>
 );
};