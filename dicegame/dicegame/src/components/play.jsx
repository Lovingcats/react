import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CasinoOutlined from "@material-ui/icons/CasinoOutlined";
import "./play.scss";

export default function play() {
  var choose = new Boolean(false);
  if (choose == 1) {
    return (
      <div className="choosing">
        <h2 className="console">팀을 선택해주세요</h2>
        <div className="dial">
          <a className="team1">
            <div id="btn">
              <div className="low"></div>
            </div>
          </a>
          <a className="team2">
            <div id="btn">
              <div className="med"></div>
            </div>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="board">
          <div className="firstrow">
            
          </div>
      </div>
    );
  }
}
