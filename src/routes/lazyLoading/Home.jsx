import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/locationInfo">Location Info</Link> |{" "}
        <Link to="/product">Product</Link>
      </nav>
    </div>
  );
}
