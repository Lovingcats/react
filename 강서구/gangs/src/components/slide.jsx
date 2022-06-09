import React from "react";
import "../App.css";
import { FullPage, Slide } from "react-full-page";
import Header from "./header";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function slide() {
  return (
    <div>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide className="firstS">
          <div className="firstP">

          </div>
        </Slide>
        <Slide className="secondP">
          <div>
            <Header />
          </div>
        </Slide>
      </FullPage>
    </div>
  );
}
