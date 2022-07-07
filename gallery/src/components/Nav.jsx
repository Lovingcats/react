import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'

export default function Nav() {
  return (
    <nav className='nav--Nav'>
      <img className='img--Nav' src='./images/logo.png' alt='logo'/>
      <h1 className='h1--Nav'>강서구</h1>
      <div className='category'>
        <Link to='/home' className='Link--category--Nav'>홈</Link>
        <Link to='/Login' className='Link--category--Nav'>로그인</Link>
        <Link to='/SignUp' className='Link--category--Nav'>회원가입</Link>
        <Link to='/map' className='Link--category--Nav'>지도</Link>
        <Link to='/add' className='Link--category--Nav'>사진 추가</Link>
      </div>
    </nav>
  )
}