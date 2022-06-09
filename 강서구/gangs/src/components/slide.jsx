import React from "react";
import "../App.css";
import { FullPage, Slide } from "react-full-page";
import Header from "./header";

export default function slide() {
  return (
    <div>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide className="firstS">
          <div className="firstP">
            <div className="firstE">
                <h1>강서구 알리기</h1>
                <p>줄바꿈 왜 안되냐</p>
                
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
