import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CasinoOutlined from "@material-ui/icons/CasinoOutlined";
import "./play.css";

export default function play() {


  var choose = new Boolean(false);
  if (choose == 1) {
    return (
      <div className="choosing">
        <h2>팀을 선택해주세요</h2>
        <span className="team1">
          1
        </span>
        <span className="team2">
          2
        </span>
      </div>
    );
  } else {
    return <p>hello</p>;
  }
}
