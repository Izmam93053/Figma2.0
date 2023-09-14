import React from 'react'
import "./About.css";
import Background4 from "../Assets/Background4.svg";
import Logo2 from "../Assets/Logo2.svg";
import Facebook from "../Assets/Facebook.svg";
import Twitter from "../Assets/Twitter.svg";
import Instagram from "../Assets/Instagram.svg";
import Linkedin from "../Assets/Linkedin.svg";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Dropdown, Select, Input, Space } from "antd";

const About = () => {
const { Search } = Input;
const onSearch = (value) => {
  console.log(value);
};
  return (
    <div className='about'>
    <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Background4} className="d-block w-100" alt="..." />

              <div className="carousel-cap">
                <div className="crodoc">
                  <div className="logo2">
                    <img src={Logo2} alt="logo" />
                  </div>
                  <h1 className="abonnez">
                    Abonnez-vous pour toute mise à jour
                  </h1>
                  <div className="inp">
                    <Search
                      placeholder="E-mail"
                      allowClear
                      enterButton="Abonnez"
                      size="large"
                      onSearch={onSearch}
                    />
                  </div>
                  <div className="icosf">
                    <p>
                      <span className="suivez">Suivez-nous sur</span>{" "}
                      <span className="face">
                        <img src={Facebook} alt="" />
                      </span>
                      <span className="face">
                        <img src={Twitter} alt="" />
                      </span>
                      <span className="face">
                        <img src={Instagram} alt="" />
                      </span>
                      <span className="face">
                        <img src={Linkedin} alt="" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="cup2">
        <div className="crodoc">
          <div className="logo2">
            <img src={Logo2} alt="logo" />
          </div>
          <h1 className="abonnez">Abonnez-vous pour toute mise à jour</h1>
          <div className="inp">
            <Search
              placeholder="E-mail"
              allowClear
              enterButton="Abonnez"
              size="large"
              onSearch={onSearch}
            />
          </div>
          <div className="icosf">
            <p>
              <span className="suivez">Suivez-nous sur</span>{" "}
              <span className="face">
                <img src={Facebook} alt="" />
              </span>
              <span className="face">
                <img src={Twitter} alt="" />
              </span>
              <span className="face">
                <img src={Instagram} alt="" />
              </span>
              <span className="face">
                <img src={Linkedin} alt="" />
              </span>
            </p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default About
