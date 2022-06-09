import React from "react";
import "../App.css";
import { FullPage, Slide } from "react-full-page";
import Header from "./header";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function slide() {
  return (
    <div >
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide className="firstS">
          <div className="firstP">
            <h1 id=""></h1>

            <div className="floating">  {/* 애니메이션 화살표 */}
              <h2>갤러리</h2>
              <AiOutlineArrowDown size="35%" />
            </div>

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
