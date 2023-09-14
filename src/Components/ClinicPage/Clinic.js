import React, { useRef } from "react";
import "./Clinic.css";
import Lessthen from "../Assets/Lessthen.svg";
import Greaterthen from "../Assets/Greaterthen.svg";
import Icon4 from "../Assets/Icon4.svg";
import Image4 from "../Assets/Image4.svg";
import Image5 from "../Assets/Image5.svg";
import Image6 from "../Assets/Image6.svg";
import Image7 from "../Assets/Image7.svg";
import Eye from "../Assets/Eye.svg";
import Icon9 from "../Assets/Icon9.svg";
import Icon10 from "../Assets/Icon10.svg";
import Icon11 from "../Assets/Icon11.svg";
import Icon12 from "../Assets/Icon12.svg";
import Checkmark from "../Assets/Checkmark.svg";
import Star from "../Assets/Star.svg";
import Heart from "../Assets/Heart.svg";
import Stroke from "../Assets/Stroke.svg";
import Location from "../Assets/Location.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Clinic = () => {
  const sliderRef = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
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
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="clinic">
      <div className="m11">
        <p className="a">Explorez tous les</p>
        <div className="d-flex thug">
          <div className="ories">
            <h1 className=" categ"><Link to="/cardiology" className="categ"> Cliniques</Link></h1>
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
      </div>
      <Slider ref={sliderRef} {...settings} className="m100 d-flex">
        <div className="card">
          <img src={Image4} className="card-img-top" alt="..." />
          <div className="card-body">
            <img className="eyeico" src={Icon9} alt="Image" />
            <h5 className="card-title">
              Dr. Hmidouch Djamel{" "}
              <span>
                <img className="checkm check" src={Checkmark} alt="image" />
              </span>
            </h5>
            <p className="oph">Généraliste</p>
            <div className="locate d-flex">
              <div className="location d-flex">
                <img src={Location} alt="" />
              </div>
              <div className="d-flex">
                <p className="card-text">
                  Quartier des 400 logements, à côté du marché couvert
                  berrouaghia, Médea
                </p>
              </div>
            </div>
            <div className="d-flex m55k">
              <div className="d-flex ey">
                <img src={Eye} alt="image" />
                <span className="k55 mx-2">55k</span>
              </div>
              <div className="d-flex ey">
                <img src={Heart} alt="image" />
                <span className="k55 mx-2">240</span>
              </div>
              <div className="d-flex ey">
                <img src={Star} alt="image" />
                <span className="k55 mx-2">4.8</span>
              </div>
            </div>
            <Link to="#" className="btn bdpri text-primary">
              <span className="spvoir">Voir Plus </span>{" "}
              <img className="cstk" src={Stroke} alt="" />
            </Link>
          </div>
        </div>
        <div className="card card1" style={{ width: "15rem" }}>
          <img src={Image5} className="card-img-top" alt="..." />
          <div className="card-body">
            <img className="eyeico" src={Icon10} alt="Image" />
            <h5 className="card-title">
              Dr. Mnaser rafik
              <span>
                <img className="checkm check2" src={Checkmark} alt="image" />
              </span>
            </h5>
            <p className="oph">Chirurgie Dentaire</p>
            <div className="locate d-flex">
              <div className="location">
                <img src={Location} alt="" />
              </div>
              <div className="">
                <p className="card-text">
                  Quartier des 400 logements, à côté du marché couvert
                  berrouaghia, Médea
                </p>
              </div>
            </div>
            <div className="d-flex m55k">
              <div className="d-flex ey">
                <img src={Eye} alt="image" />
                <span className="k55 mx-2">55k</span>
              </div>
              <div className="d-flex ey">
                <img src={Heart} alt="image" />
                <span className="k55 mx-2">240</span>
              </div>
              <div className="d-flex ey">
                <img src={Star} alt="image" />
                <span className="k55 mx-2">4.8</span>
              </div>
            </div>
            <Link to="#" className="btn bdpri text-primary">
              <span className="spvoir">Voir Plus </span>{" "}
              <img className="cstk" src={Stroke} alt="icon" />
            </Link>
          </div>
        </div>
        <div className="card card1" style={{ width: "15rem" }}>
          <img src={Image6} className="card-img-top" alt="..." />
          <div className="card-body">
            <img className="eyeico" src={Icon11} alt="Image" />
            <h5 className="card-title">
              Dr. Othmani Salem
              <span>
                <img className="checkm check3" src={Checkmark} alt="image" />
              </span>
            </h5>
            <p className="oph">Cardiologie</p>

            <div className="locate d-flex">
              <div className="location d-flex">
                <img src={Location} alt="" />
              </div>
              <div className="d-flex">
                <p className="card-text">
                  Quartier des 400 logements, à côté du marché couvert
                  berrouaghia, Médea
                </p>
              </div>
            </div>
            <div className="d-flex m55k">
              <div className="d-flex ey">
                <img src={Eye} alt="image" />
                <span className="k55 mx-2">55k</span>
              </div>
              <div className="d-flex ey">
                <img src={Heart} alt="image" />
                <span className="k55 mx-2">240</span>
              </div>
              <div className="d-flex ey">
                <img src={Star} alt="image" />
                <span className="k55 mx-2">4.8</span>
              </div>
            </div>
            <Link to="/cardiology" className="btn bdpri text-primary">
              <span className="spvoir">Voir Plus </span>{" "}
              <img className="cstk" src={Stroke} alt="" />
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img src={Image7} className="card-img-top" alt="..." />
          <div className="card-body">
            <img className="eyeico" src={Icon12} alt="Image" />
            <h5 className="card-title">
              Dr. Hmidouch Djamel
              <span>
                <img className="checkm check4" src={Checkmark} alt="image" />
              </span>
            </h5>
            <p className="oph">Généraliste</p>
            <div className="locate d-flex">
              <div className="location d-flex">
                <img src={Location} alt="" />
              </div>
              <div className="d-flex">
                <p className="card-text">
                  Quartier des 400 logements, à côté du marché couvert
                  berrouaghia, Médea
                </p>
              </div>
            </div>
            <div className="d-flex m55k">
              <div className="d-flex ey">
                <img src={Eye} alt="image" />
                <span className="k55 mx-2">55k</span>
              </div>
              <div className="d-flex ey">
                <img src={Heart} alt="image" />
                <span className="k55 mx-2">240</span>
              </div>
              <div className="d-flex ey">
                <img src={Star} alt="image" />
                <span className="k55 mx-2">4.8</span>
              </div>
            </div>
            <Link to="#" className="btn bdpri text-primary">
              <span className="spvoir">Voir Plus </span>{" "}
              <img className="cstk" src={Stroke} alt="" />
            </Link>
          </div>
        </div>
        <div className="card card1" style={{ width: "15rem" }}>
          <img src={Image5} className="card-img-top" alt="..." />
          <div className="card-body">
            <img className="eyeico" src={Icon10} alt="Image" />
            <h5 className="card-title">
              Dr. Mnaser rafik
              <span>
                <img className="checkm check2" src={Checkmark} alt="image" />
              </span>
            </h5>
            <p className="oph">Chirurgie Dentaire</p>
            <div className="locate d-flex">
              <div className="location d-flex">
                <img src={Location} alt="" />
              </div>
              <div className="d-flex">
                <p className="card-text">
                  Quartier des 400 logements, à côté du marché couvert
                  berrouaghia, Médea
                </p>
              </div>
            </div>
            <div className="d-flex m55k">
              <div className="d-flex ey">
                <img src={Eye} alt="image" />
                <span className="k55 mx-2">55k</span>
              </div>
              <div className="d-flex ey">
                <img src={Heart} alt="image" />
                <span className="k55 mx-2">240</span>
              </div>
              <div className="d-flex ey">
                <img src={Star} alt="image" />
                <span className="k55 mx-2">4.8</span>
              </div>
            </div>
            <Link to="#" className="btn bdpri text-primary">
              <span className="spvoir">Voir Plus </span>{" "}
              <img className="cstk" src={Stroke} alt="" />
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img src={Image7} className="card-img-top" alt="..." />
          <div className="card-body">
            <img className="eyeico" src={Icon12} alt="Image" />
            <h5 className="card-title">
              Dr. Hmidouch Djamel
              <img className="checkm" src={Checkmark} alt="image" />
            </h5>
            <p className="oph">Généraliste</p>
            <div className="locate d-flex">
              <div className="location d-flex">
                <img src={Location} alt="" />
              </div>
              <div className="d-flex">
                <p className="card-text">
                  Quartier des 400 logements, à côté du marché couvert
                  berrouaghia, Médea
                </p>
              </div>
            </div>
            <div className="d-flex m55k">
              <div className="d-flex ey">
                <img src={Eye} alt="image" />
                <span className="k55 mx-2">55k</span>
              </div>
              <div className="d-flex ey">
                <img src={Heart} alt="image" />
                <span className="k55 mx-2">240</span>
              </div>
              <div className="d-flex ey">
                <img src={Star} alt="image" />
                <span className="k55 mx-2">4.8</span>
              </div>
            </div>
            <Link to="#" className="btn bdpri text-primary">
              <span className="spvoir">Voir Plus </span>{" "}
              <img className="cstk" src={Stroke} alt="" />
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Clinic;
