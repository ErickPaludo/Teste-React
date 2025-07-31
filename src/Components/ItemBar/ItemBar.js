import React from "react";
import "./item.css"; // dentro do arquivo ItemBar.js

function ItemBar({ value, icon }) {
  return (
    <div className="d-flex flex-column align-items-center item-container">
      <div className="icone">
        {icon && <span className="icon-content">{icon}</span>}
      </div>
      <p className="titleItem mb-0 mt-1">{value}</p>
    </div>
  );
}

export default ItemBar;
