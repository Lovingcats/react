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
            <div className="firstT">
              <h1>여기는 h1태그가 들어갑니다</h1>
              <h3>
                여기는 h3태그 내용 나는고양이, 나는천재, 나는멍청이가 들어갑니다
              </h3>
            </div>

            <div className="floating">
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
