import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link className="title" to="/">EDirectInsure TODO List</Link>
      <AuthOptions />
    </header>
  );
};

export default Header;
