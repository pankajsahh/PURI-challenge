import React from 'react'
import './Header.css'
import LoGo from "../../assets/logo.png"
const Header = () => {
  return (
    <div className='Header'>
      <img width={150} height={34} src={LoGo} alt="" />
      <ul>
        <li className='webTab'>Home</li>
        <li className='webTab'>About us</li>
        <li className='webTab'>Media</li>
        <li className='webTab'>Carrer</li>
        <li className='webTab'>Contact us</li>
        <li className='mobile'><i class="bi bi-list"></i></li>
      </ul>
    </div>
  )
}

export default Header