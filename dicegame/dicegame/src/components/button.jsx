import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

export default function button() {
  return (
    <div id="button">
      <Link to="/Play" class="btn btn-solid effect-scale">
        시작하기
      </Link>
      {/* <a href="#" class="btn btn-solid effect-scale">시작하기</a> */}
    </div>
  );
}
