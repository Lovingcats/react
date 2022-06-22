import React from "react";
import "./play.css";
import IconButton from "@material-ui/core/IconButton";
import CasinoOutlined from "@material-ui/icons/CasinoOutlined";
export default function play() {
  return (
    <div>
      <IconButton size="medium">
        <CasinoOutlined />
      </IconButton>
    </div>
  );
}
