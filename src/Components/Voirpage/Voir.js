import React, { useRef } from "react";
import Background from "../Assets/Background.svg";
import Lessthen from "../Assets/Lessthen.svg";
import Icon8 from "../Assets/Icon8.svg";
import Avatar from "../Assets/Avatar.svg";
import Greaterthen from "../Assets/Greaterthen.svg";
import Background2 from "../Assets/Background2.svg";
import Background3 from "../Assets/Background3.svg";
import "./Voir.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Voir = () => {
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="voir m11">
      <p className="a">Notre blog</p>
      <div className="d-flex thug">
        <div className="ories">
          <h1 className=" categ">Voir notre dernier blog</h1>
        </div>
        <div className=" btnout">
          <Link to="#" style={{ textDecoration: "none" }}>
            <img
              className="lessthen"
              onClick={previous}
              src={Lessthen}
              alt="image"
            />{" "}
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <img src={Greaterthen} onClick={next} alt="image" />
          </Link>
        </div>
      </div>
      <Slider className="overback" ref={sliderRef} {...settings}>
        <div className="card overcard text-white">
          <img src={Background} className="card-img2" alt="image" />
          <div className="card-img-overlay d-flex">
            <div>
              <h5 className="card-title2">Chirurgie Dentaire</h5>
              <div className="ven">
                <div className="dblock">
                  <p className="card-text3">
                    <img src={Icon8} alt="" /> 24/05/2022{" "}
                  </p>
                  <h3 className="une">
                    Une hernie discale lombaire ventrale..
                  </h3>
                  <p className="card-text2">
                    <img className="avatar" src={Avatar} alt="" />
                    Selma Achref
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card overcard text-white">
          <img src={Background2} className="card-img2" alt="image" />
          <div className="card-img-overlay d-flex">
            <div>
              <h5 className="card-title2">Ophtalmologie</h5>
              <div className="ven">
                <div className="dblock">
                  <p className="card-text3">
                    <img src={Icon8} alt="" /> 24/05/2022{" "}
                  </p>
                  <h3 className="une">
                    Une hernie discale lombaire ventrale..
                  </h3>
                  <p className="card-text2">
                    <img className="avatar" src={Avatar} alt="" />
                    Selma Achref
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card overcard text-white">
          <img src={Background3} className="card-img2" alt="image" />
          <div className="card-img-overlay d-flex">
            <div>
              <h5 className="card-title2">Cardiologie</h5>
              <div className="ven">
                <div className="dblock">
                  <p className="card-text3">
                    <img src={Icon8} alt="" /> 24/05/2022{" "}
                  </p>
                  <h3 className="une">
                    Une hernie discale lombaire ventrale..
                  </h3>
                  <p className="card-text2">
                    <img className="avatar" src={Avatar} alt="" />
                    Selma Achref
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card overcard text-white">
          <img src={Background} className="card-img2" alt="image" />
          <div className="card-img-overlay d-flex">
            <div>
              <h5 className="card-title2">Chirurgie Dentaire</h5>
              <div className="ven">
                <div className="dblock">
                  <p className="card-text3">
                    <img src={Icon8} alt="" /> 24/05/2022{" "}
                  </p>
                  <h3 className="une">
                    Une hernie discale lombaire ventrale..
                  </h3>
                  <p className="card-text2">
                    <img className="avatar" src={Avatar} alt="" />
                    Selma Achref
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card overcard text-white">
          <img src={Background2} className="card-img2" alt="image" />
          <div className="card-img-overlay d-flex">
            <div>
              <h5 className="card-title2">Ophtalmologie</h5>
              <div className="ven">
                <div className="dblock">
                  <p className="card-text3">
                    <img src={Icon8} alt="" /> 24/05/2022{" "}
                  </p>
                  <h3 className="une">
                    Une hernie discale lombaire ventrale..
                  </h3>
                  <p className="card-text2">
                    <img className="avatar" src={Avatar} alt="" />
                    Selma Achref
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card overcard text-white">
          <img src={Background3} className="card-img2" alt="image" />
          <div className="card-img-overlay d-flex">
            <div>
              <h5 className="card-title2">Cardiologie</h5>
              <div className="ven">
                <div className="dblock">
                  <p className="card-text3">
                    <img src={Icon8} alt="" /> 24/05/2022{" "}
                  </p>
                  <h3 className="une">
                    Une hernie discale lombaire ventrale..
                  </h3>
                  <p className="card-text2">
                    <img className="avatar" src={Avatar} alt="" />
                    Selma Achref
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Voir;
