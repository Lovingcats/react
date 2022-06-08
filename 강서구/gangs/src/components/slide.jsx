import React from "react";
import "../App.css";
import { FullPage, Slide } from "react-full-page";
import Header from "./header";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function slide() {
  return (
    <div>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide
          style={{ background: "url(./mainP.jfif)", backgroundSize: "cover" , backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100vw',
          height: '100vh'}}
        >
          <div className="firstP">
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
