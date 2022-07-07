import React from "react";
import Nav from "./Nav";
import "../CSS/Main.css";

export default function Main() {
  let images = [
    "./images/동백군락.jpg",
    "./images/명사낙안.jpg",
    "./images/명월만산.jpg",
    "./images/삼십리방.jpg",
    "./images/성화례향.jpg",
    "./images/죽도모연.jpg",
    "./images/포효무제.jpg",
    "./images/해강일점.jpg",
  ];

  return (
    <div className="div--Main">
      <Nav />
      <main className="main--Main">
        {images.map((values) => (
          <img src={values} alt="place" className="img--main--Main" />
        ))}
      </main>
    </div>
  );
}
