import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function slide() {
  return (
    <div>
      <div className="dark">
        <div className="text">
          <p className="title">부산 강서구 gallery에 오신것을 환영합니다</p>
          <Link
            to="/gallery "
            style={{ textDecoration: "none" }}
            className="btn"
          >
            gallery 이동하기
          </Link>
        </div>
      </div>
      <div className="p1"></div>
      <div className="p2"></div>
      <div className="p3"></div>
      <div className="p4"></div>
      <div className="p5"></div>
      <div className="p6"></div>
      <div className="p7"></div>
      <div className="p8"></div>
      <div className="p9"></div>
      <div className="p10"></div>
      <div className="p11"></div>
      <div className="p12"></div>
      <div className="p13"></div>
      <div className="p14"></div>
      <div className="p15"></div>
      <div className="p16"></div>
      <div className="p17"></div>
    </div>
  );
}
