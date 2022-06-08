import React from "react";
import "../App.css";
import { FullPage, Slide } from "react-full-page";

import Header from "./header";
export default function container() {
  return (
    <FullPage controls>
      <Slide>
        <Header />
      </Slide>
      <Slide>
        <h1>2번째</h1>
      </Slide>
    </FullPage>
  );
}
