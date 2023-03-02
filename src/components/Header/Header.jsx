import React, { useState } from "react";
import "./Header.css";
import LoGo from "../../assets/logo.png";
import { InView } from "react-intersection-observer";
const Header = () => {
  const [ nav ,setnav]=useState(true);
  console.log(nav)
  return (
    <InView
      as="div"
      className={`Header ${!nav?"StickyNav":""}`}
      name="Header"
      onChange={(inView) =>
        setnav(false)
      }
     
    >
      <img width={150} height={34} src={LoGo} alt="" />
      <ul>
        <li className="webTab">Home</li>
        <li className="webTab">About us</li>
        <li className="webTab">Media</li>
        <li className="webTab">Carrer</li>
        <li className="webTab">Contact us</li>
        <li className="mobile">
          <i class="bi bi-list"></i>
        </li>
      </ul>
    </InView>
  );
};

export default Header;
