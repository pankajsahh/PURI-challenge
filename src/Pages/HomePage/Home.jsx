import React, { useEffect, useState } from "react";
import "./HomePage.css";
import DeplomaticImg from "../../assets/DeplomaticImg.jpg";
import Endeavour from "../../assets/Endeavour.png";
import Endeavour2 from "../../assets/Endeavour2.png";
import CompanyImg from "../../assets/CompanyImg.png";
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
const Home = () => {
  const [animate, setAnimate] = useState({});
  console.log(animate);

  useEffect(() => {
    if (animate.CompanyInfoDetails) {
    }
  }, [animate.CompanyInfoDetails]);
  return (
    <div className="Home ">
      <div className="DiplomaticGreen ">
        <div className="DiplomaticGreenInfo ">
          <div className="GreenInfoHead mobileTextUp  AnimateRightToLeft">
            <h2>DIPLOMATIC</h2>
            <h2> GREENS</h2>
            <p className="">Section 110A & 111,GURUGRAM</p>
          </div>
          <div className="descriptionGreenInfo AnimateLeftToRight ">
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
        <img
          className="AnimateLeftToRight"
          loading="lazy"
          width={500}
          height={430}
          src={DeplomaticImg}
          alt=""
        />
      </div>
      <InView
        as="div"
        className={`Endeavour`}
        name="Endeavour"
        onChange={(inView) =>
          setAnimate({
            ...animate,
            Endeavour: animate.Endeavour ? true : inView,
          })
        }
      >
        <div
          className={`EndeavourInfo  p-4 ${
            animate?.Endeavour ? "AnimateRightToLeft" : ""
          }`}
        >
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
        <div className="EndeavourImages ">
          <img
            loading="lazy"
            width={300}
            height={300}
            src={Endeavour2}
            alt="Endeavour2"
          />
          <p>ACTUAL IMAGE OF AANANDVILAS CLUB</p>
          <img
            loading="lazy"
            className="overlayImg"
            width={50}
            height={300}
            src={Endeavour}
            alt="Endeavour"
          />
        </div>
        <div className="toprightAbout">
          <div className="line"></div>
          About
        </div>
      </InView>

      <div className="CompanyInfo">
        <div className="CompanyInfoImage">
          <div className="greyBox"></div>
          <img
            loading="lazy"
            width={300}
            height={420}
            src={CompanyImg}
            alt=""
          />
        </div>
        <InView
          as="div"
          className={`CompanyInfoDetails`}
          name="CompanyInfoDetails"
          onChange={(inView) =>
            setAnimate({
              ...animate,
              CompanyInfoDetails: animate?.CompanyInfoDetails ? true : inView,
            })
          }
        >
          <ul>
            <li>
              {animate?.CompanyInfoDetails ? (
                <CountUp  className="SpecialGrey" start={0} end={50} duration={3} />
              ) : (
                <p className="SpecialGrey" name="50">
                  {animate.years || 0}
                </p>
              )}

              <p>years legacy</p>
            </li>
            <li>
            {animate?.CompanyInfoDetails ? (
                <CountUp  className="SpecialGrey" start={0} end={2150} duration={3} />
              ) : (
                <p className="SpecialGrey" name="2150">
                {animate.delivered || 0}
              </p>
              )}
              
              <p>units delivered in the last 36 months</p>
            </li>
            <li>
            {animate?.CompanyInfoDetails ? (
                <CountUp  className="SpecialGrey" start={0} end={2750} duration={3} />
              ) : (
                <p className="SpecialGrey" name="2750">
                {animate.delivered || 0}
              </p>
              )}
              <p>
                upcoming units coming up for delivery in the next 24 months
              </p>
            </li>
          </ul>
        </InView>
      </div>

      <div className="ProjectsForSale my-5">
        <h3 className="text-center my-4">PROJECTS FOR SALE</h3>
        <div className="Images">
          <img
            loading="lazy"
            width={380}
            height={320}
            src={Project1}
            alt="Project"
          />
          <img
            loading="lazy"
            width={380}
            height={320}
            src={Project2}
            alt="Project"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
