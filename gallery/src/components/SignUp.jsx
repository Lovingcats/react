import React from "react";
import "../CSS/SignUp.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  let name, password, id;

  const navigate = useNavigate();

  const submit = async(event) => {
    event.preventDefault();
    
    name = document.getElementsByClassName("input")[0].value;
    id = document.getElementsByClassName("input")[1].value;
    password = document.getElementsByClassName("input")[2].value;
    
    const response = await axios.post("http://localhost:8080/login/register", {
      name: name,
      id: id,
      pwd: password,
    });
    console.log(response.data); 
    navigate("/Login");
  }

  return (
    <div className="div--SignUp">
      <form className="form--SignUp" method="post" onSubmit={submit}>
        <h1 className="h1--SignUp">Sign Up</h1>
        <input
          type="text"
          name="name"
          placeholder="Username"
          className="input"
        />
        <input type="text" name="id" placeholder="UserID" className="input" />
        <input
          type="password"
          name="pwd"
          placeholder="Password"
          className="input"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}