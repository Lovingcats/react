import React from "react";
import "../App.css";
import Header from "./header";
export default function container() {
  return (
    <div>
      <div className="outer">
      <div className="inner first"><Header/></div>
      <div className="inner ">2</div>
      <div className="inner ">3</div>
      </div>
    </div>
  );
}
