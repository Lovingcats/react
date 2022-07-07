import React from 'react'
import '../CSS/Login.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Login() {
  let password, id;

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    id = document.getElementsByClassName("input")[0].value;
    password = document.getElementsByClassName("input")[1].value;
    const response = await axios.post("http://localhost:8080/login/signin", {
      id: id,
      pwd: password,
    });
    console.log(response.data);
    navigate("/");
  }

  return (
    <div className='div--Login'>
      <form className='form--Login' method="post" onSubmit={submit}>
        <h1 className='h1--Login'>Login</h1>
        <input type='text' name='id' placeholder='UserID' className='input' />
        <input type='password' name='pwd' placeholder='Password' className='input' />
        <input type='submit' name='submit' value='Submit' />
      </form>
    </div>
  )
}