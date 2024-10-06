import React from "react";
import { Link } from "react-router-dom";

function EmptyPage() {
  return (
    <div className="emptypage navItem">
      <Link to="/">Back home</Link>
    </div>
  );
}

export default EmptyPage;
