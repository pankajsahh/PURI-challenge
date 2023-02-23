import React from "react";
import "./HomePage.css";
import DeplomaticImg from "../../assets/DeplomaticImg.png";
import Endeavour from "../../assets/Endeavour.png";
import Endeavour2 from "../../assets/Endeavour2.png";
import CompanyImg from "../../assets/CompanyImg.png";
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
const Home = () => {
  return (
    <div className="Home ">
      <div className="DiplomaticGreen">
        <div className="DiplomaticGreenInfo p-5">
          <div className="GreenInfoHead">
            <h2>DIPLOMATIC</h2>
            <h2> GREENS</h2>
            <p className="">Section 110A & 111,GURUGRAM</p>
          </div>
          <div className="descriptionGreenInfo">
            <p className="fw-bold ">
              Diplomatic Greens ensures the world is indeed your oyster. The
              property's vantage location ensures you stay connected, networked
              and in the midst of urban amenities.
            </p>
            <button>MORE DETAILS</button>
          </div>
          <div className="slider">
            <div className="px-1">
              <span className="fs-1">.</span>
              02
            </div>
            <div className="line"></div>
            <div className="px-1">
              03 <span className="fs-1">.</span>
            </div>
          </div>
        </div>
        <img width={500} height={430} src={DeplomaticImg} alt="" />
      </div>
      <div className="Endeavour">
        <div className="EndeavourInfo p-4">
          <div className="EndeavourInfoCenter">
            <h2>Delivering Quality in Each Endeavour</h2>
            <p>
              Every project has a distinctive Puri design language which has
              become synonymous with refined living in Delhi NCR. South-East
              Asian inspired landscaping and ultra luxurious watch clubhouses
              are some of the things which can be seen in every project of Puri{" "}
            </p>
            <button>DISCOVER MORE</button>
            <br />
            <div className="slider2 ">
              <div className="px-1">
                <span className="fs-1">.</span>
                02
              </div>
              <div className="line"></div>
              <div className="px-1">
                03 <span className="fs-1">.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="EndeavourImages">
          <img width={300} height={300} src={Endeavour2} alt="Endeavour2" />
          <p>ACTUAL IMAGE OF AANANDVILAS CLUB</p>
          <img
            className="overlayImg"
            width={300}
            height={300}
            src={Endeavour}
            alt="Endeavour"
          />
        </div>
        <div className="toprightAbout">
          <div className="line"></div>
          About
        </div>
      </div>

      <div className="CompanyInfo">
        <div className="CompanyInfoImage">
          <div className="greyBox"></div>
          <img width={300} height={420} src={CompanyImg} alt="" />
        </div>
        <div className="CompanyInfoDetails">
          <ul>
            <li>
              <p className="SpecialGrey">50</p>
              <span>years legacy</span>
            </li>
            <li>
              <p className="SpecialGrey">2150</p>
              <span>units delivered in the last 36 months</span>
            </li>
            <li>
              <p className="SpecialGrey">2700</p>
              <span>
                upcoming units coming up for delivery in the next 24 months
              </span>
            </li>
          </ul>
        </div>
      </div>

<div className="ProjectsForSale my-5">
  <h3 className="text-center my-4">PROJECTS FOR SALE</h3>
  <div className="Images">
    <img width={380} height={320} src={Project1} alt="Project" />
    <img width={380} height={320}  src={Project2} alt="Project" />
  </div>
</div>

    </div>
  );
};

export default Home;
