import React from "react";
import "../App.css";
import { FullPage, Slide } from "react-full-page";
import Header from "./header";

export default function slide() {
  return (
    <div>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <div>
            
          </div>
        </Slide>
        <Slide>
          <div>
            <Header/>
            
          </div>
        </Slide>
      </FullPage>
    </div>
  );
}
