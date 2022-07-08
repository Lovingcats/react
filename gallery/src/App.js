import React from "react";
import Slide from "./components/slide.jsx";
import Main from "./components/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Add from "./components/add.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const onUpload = (files) => {
    console.log(files);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/home" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/add" element={<Add/>} />
      </Routes>
    </div>
  );
}
