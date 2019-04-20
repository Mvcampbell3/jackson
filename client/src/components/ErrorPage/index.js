import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <h1>This Page does not exist</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default ErrorPage;