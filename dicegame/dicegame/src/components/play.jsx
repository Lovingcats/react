import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CasinoOutlined from "@material-ui/icons/CasinoOutlined";
import "./play.css";

export default function play() {

  
  var choose = new Boolean(false);
  if (choose == 0) {
    return (
      <div className="choosing">
        <div className="team1">청팀</div>
        <div className="team2">백팀</div>
      </div>
    );
  } else {
    return <p>hello</p>;
  }
}
