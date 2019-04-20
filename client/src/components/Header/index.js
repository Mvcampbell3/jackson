import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Header = () => {
  return (
    <header>

      <h1>This is Jack's Page</h1>
      <Link to="/">Home</Link>
      <Link to="/seamonster">SeaMonsters</Link>

    </header>
  )
}

export default Header;