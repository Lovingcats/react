import React from "react";
import "./header.scss";
import Button from "./button.jsx";

export default function header() {
  return (
    <div>
      <div id="dice">
        <div className="box">
          <span className="w1">H</span>
          <span className="w2">e</span>
          <span className="w3">l</span>
          <span className="w4">l</span>
          <span className="w5">o</span>
          <span className="w6">!</span>
        </div>
      </div>
      <Button />
    </div>
  );
}
