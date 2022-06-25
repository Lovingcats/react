import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const [color, setColor] = useState("black");
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
      <div id="button">
      <Link to="/Play" class="btn btn-solid effect-scale">
        시작하기
      </Link>
    </div>
    </div>
  );
}
