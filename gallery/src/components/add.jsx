import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/add.css";

export default function Add() {
  const [file, setFile] = React.useState(null);
  const navigtor = useNavigate();

  const submit = async (event) => {
    console.log(file);
    const formData = new FormData();
    formData.append("imageFile", file);
    const respone = await axios.post(
      "http://localhost:8080/image/upload",
      formData
    );
    console.log(respone.data);
    navigtor("/home");
  };

  const [img, setImg] = useState(null);

  const readImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setFile(e.dataTransfer.files[0]);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => setImg(reader.result);
  };
  return (
    <div className="Upload">
      <div
        className="Drag"
        onDragOver={(e) => e.preventDefault()}
        onDrop={readImage}
      >
        {img ? <img src={img} /> : "Drag an image here"}
      </div>
      <div
        id="button"
        className="btun btun-solid effect-scale"
        onClick={submit}
      >
        등록하기
      </div>
    </div>
  );
}
