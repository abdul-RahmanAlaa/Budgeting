import { Link, useNavigate } from "react-router-dom";

import React from "react";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {"Personal Budget Tracker"}
        </Link>

        <button
          className="btn btn-outline-secondary my-2 my-sm-0"
          onClick={() => navigate("/create-record")}
        >
          {"Add New Record"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
