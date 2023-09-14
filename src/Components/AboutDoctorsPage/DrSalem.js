import React from "react";
import "./DrSalem.css";
import Icon5 from "../Assets/Icon5.svg";
import Check from "../Assets/Checkmark.svg";
import Heart from "../Assets/Heart.svg";
import Eye from "../Assets/Eye.svg";
import Star from "../Assets/Star.svg";
import Location from "../Assets/Location.svg";
import Tag from "../Assets/Tag.svg";
import Linkicon from "../Assets/Link.svg";
import Background23 from "../Assets/Background23.svg";
import Background24 from "../Assets/Background24.svg";
import Background25 from "../Assets/Background25.svg";
import Background26 from "../Assets/Background26.svg";
import Background27 from "../Assets/Background27.svg";
import thumbsdown from "../Assets/hand.thumbsdown.svg";
import thumbsdownblack from "../Assets/hand.thumbsdownblack.svg";
import thumbsdownred from "../Assets/hand.thumbsdown.red.svg";
import thumbsup from "../Assets/hand.thumbsup.svg";
import thumbsupblack from "../Assets/hand.thumbsupblack.svg";
import thumbsupgreen from "../Assets/hand.thumbsup.green.svg";
import graduationcap from "../Assets/graduationcap.svg";
import Health from "../Assets/cross.case.svg";
import Image13 from "../Assets/Image13.svg";
import Image14 from "../Assets/Image14.svg";
import Image15 from "../Assets/Image15.svg";
import Building from "../Assets/building 1.svg";
import Fill1 from "../Assets/Fill-1.svg";
import Fill2 from "../Assets/Fill-2.svg";
import Facebook3 from "../Assets/Facebook_icon3.svg";
import Twitter3 from "../Assets/Twitter3.svg";
import Instagram3 from "../Assets/Instagram3.svg";
import Messenger from "../Assets/Messenger.svg";
import Messege from "../Assets/Messege.svg";
import Fill3 from "../Assets/Fill-3.svg";
import Yahoo from "../Assets/Yahoo.svg";
import Time from "../Assets/Time Circle.svg";
import Calendar from "../Assets/Calendar.svg";
import Avatar from "../Assets/Avatar.svg";
import Notes from "../Assets/Notes.svg";
import { Link } from "react-router-dom";
import {
  DislikeOutlined,
  LikeOutlined,
  MessageOutlined,
  RightOutlined,
} from "@ant-design/icons";

const DrSalem = () => {
  return (
    <div className="dr-page">
      <div className="m10">
        <div>
          <p className="accp2">
            <Link className="accp text-dark" to="/">
              Accueil
            </Link>{" "}
            <span className="outright">
              <RightOutlined />
            </span>{" "}
            <Link to="/" className="text-dark">
              Clinic
            </Link>
            <span className="outright">
              <RightOutlined />
            </span>{" "}
            <Link to="/cardiology" className="text-dark">
              Cardiologie
            </Link>
            <span className="outright out-drsalem">
              <RightOutlined />
            </span>{" "}
            <Link to="/drsalem" className="text-primary out-drsalem">
              Dr. Othmani Salem
            </Link>
          </p>
        </div>
        <div className="d-flex space drheader">
          <h1 className="dr-h">
            <img src={Icon5} alt="icon" className="icon5" /> Dr. Othmani Salem{" "}
            <img src={Check} alt="" className="dr-check" />
          </h1>
          <div className="dricon">
            <span className="heart">
              <img src={Heart} alt="" className="hearticon" />
            </span>
            <span className="heart">
              <img src={Tag} alt="" className="hearticon" />
            </span>
            <span className="heart">
              <img src={Linkicon} alt="" className="hearticon" />
            </span>
          </div>
        </div>
        <div className="m55 d-flex flex-wrap">
          <span className="mx2">
            {" "}
            <img src={Eye} alt="" className="eyeicon" /> 55k
          </span>
          <span className="mx2">
            {" "}
            <img src={Heart} alt="" className="eyeicon" /> 240
          </span>
          <span className="mx2">
            {" "}
            <img src={Star} alt="" className="eyeicon" /> 4.8
            <span className=" mx-2 text-primary"> ( 42 Avis )</span>
          </span>
          <span className="mx2">
            {" "}
            <MessageOutlined className="eyeicon" /> 12 Commantaires
          </span>
        </div>
        <div className="row space my4">
          <div className="col-md-6" height="600px">
            <img src={Background23} className=" backgroundimg2" alt="" />
          </div>
          <div className="col-md-6 p-17">
            <div className="row space">
              <div className="col-md-6">
                {" "}
                <img src={Background24} className="backgroundimg " alt="" />
              </div>
              <div className="col-md-6">
                <img src={Background25} className="backgroundimg" alt="" />
              </div>
            </div>
            <div className="row space mtop">
              <div className="col-md-6">
                <img src={Background26} className="backgroundimg" alt="" />
              </div>
              <div className="col-md-6">
                <img src={Background27} className="backgroundimg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="like">
          <div className="like2">
            <p className="param">
              D'après votre expérience, recommandez-vous de visiter la
              clinique ?
            </p>
          </div>
          <div className="like2 thumblike">
            <button className="thumbsdown">
              <img src={thumbsdown} alt="icon" /> Non
            </button>{" "}
            <button className="thumbsup">
              <img src={thumbsup} alt="" /> Oui
            </button>
          </div>
        </div>
        <div className="bio">
          <img src={graduationcap} className="mx-2" alt="" /> Bio
        </div>
        <p className="follows">
          eyadaty follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </p>
        <div className="bio">
          <img src={Building} className="mx-2" alt="" /> Coordonnées
        </div>
        <div className="row my-4">
          <div className="col-md-6 p10">
            <div className="d-flex my-3">
              <img src={Location} alt="" className="location" />
              <p className="qtier4">
                Quartier des 400 logements, à côté du marché couvert, Beni
                Slimane, Médea
              </p>
              <img src={Fill1} alt="" className="fill1" />
            </div>
            <div className="d-flex my-3">
              <img src={Fill2} alt="" className="location" />
              <p className="qtier4"> +213 657 85 82 89</p>
              <img src={Fill3} alt="" className="fill1" />
            </div>
            <div className="d-flex my-3">
              <img src={Fill2} alt="" className="location" />
              <p className="qtier4"> +213 25 78 08 41</p>
              <img src={Fill3} alt="" className="fill1" />
            </div>
            <div className="d-flex my-3">
              <img src={Yahoo} alt="" className="location" />
              <p className="qtier4">otmani.cardio@yahoo.com</p>
            </div>
            <p className="socio"> Réseaux sociaux</p>
            <div className="d-flex">
              <img src={Facebook3} alt="icon" />{" "}
              <img src={Twitter3} className="mx-3" alt="icon" />
              <img src={Instagram3} alt="icon" />
              <img src={Messenger} className="mx-3" alt="icon" />
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102656.45963590873!2d2.717788044241486!3d36.481369155659344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0c66865a4cd1%3A0xccfcf9c073646dfe!2sBlida%2C%20Algeria!5e0!3m2!1sen!2s!4v1683992082982!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "16px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="bio" style={{ marginTop: "50px" }}>
          <img src={Health} className="mx-2" alt="" /> Services
        </div>
        <div className="d-inline">
          <ul>
            <li className="serv-list">Echo dopler cardiaque adulte.</li>
            <li className="serv-list">Potentiomètre.</li>
            <li className="serv-list">ECG.</li>
            <li className="serv-list">Hotler Tensionnel ( MAPA ).</li>
            <li className="serv-list">Pression artérielle.</li>
            <li className="serv-list">Maladies cardio-vasculaires.</li>
            <li className="serv-list">Echo doppler vasculaire.</li>
            <li className="serv-list">Hotler ECG.</li>
            <li className="serv-list">MAPA.</li>
            <li className="serv-list">Epreuve d’efforts.</li>
          </ul>
        </div>
        <div className="bio biotime d-flex" style={{ marginTop: "50px" }}>
          <div className="d-flex">
            <img src={Time} className="mx-2" alt="" /> Horaire de travail{" "}
          </div>
          <span className="out">Ouvert</span>
        </div>
        <div className="d-flex cld space">
          <div className=" d-block">
            <img src={Calendar} alt="" />
            <h1 className="samedi my-2">Samedi</h1>
            <p className="time8 d-flex">
              08:00 - 12:00 <span className="mx-3">13:00 - 17:00</span>
            </p>
          </div>
          <div className=" d-block">
            <img src={Calendar} alt="" />
            <h1 className="samedi my-2">Dimanche</h1>
            <p className="time8 d-flex">
              08:00 - 12:00 <span className="mx-3">13:00 - 17:00</span>
            </p>
          </div>
          <div className=" d-block">
            <img src={Calendar} alt="" />
            <h1 className="samedi my-2">Lundi</h1>
            <p className="time8 d-flex">
              08:00 - 12:00 <span className="mx-3">13:00 - 17:00</span>
            </p>
          </div>
          <div className=" d-block">
            <img src={Calendar} alt="" />
            <h1 className="samedi my-2">Mardi</h1>
            <p className="time8 d-flex">
              08:00 - 12:00 <span className="mx-3">13:00 - 17:00</span>
            </p>
          </div>
        </div>
        <div className="d-flex cld">
          <div className=" d-block cld2">
            <img src={Calendar} alt="" />
            <h1 className="samedi my-2">Mercredi</h1>
            <p className="time8 d-flex">
              08:00 - 12:00 <span className="mx-3">13:00 - 17:00</span>
            </p>
          </div>
          <div className=" d-block">
            <img src={Calendar} alt="" />
            <h1 className="samedi my-2">Jeudi</h1>
            <p className="time8 d-flex">
              08:00 - 12:00 <span className="mx-3">13:00 - 17:00</span>
            </p>
          </div>
        </div>
        <div className="bio" style={{ margin: "40px 0px" }}>
          <img src={Notes} className="mx-2" alt="" /> Notes
        </div>
        <ul>
          <li className="serv-list">
            eyadaty follows a standard procedure of using log files.
          </li>
          <li className="serv-list">
            eyadaty follows a standard procedure of using log files.
          </li>
          <li className="serv-list">
            eyadaty follows a standard procedure of using log files.
          </li>
          <li className="serv-list">
            eyadaty follows a standard procedure of using log files.
          </li>
          <li className="serv-list">
            eyadaty follows a standard procedure of using log files.
          </li>
        </ul>
        <div className="bio" style={{ margin: "40px 0px" }}>
          <img src={Messege} className="mx-2" alt="" /> Commentaires <span className="sp20">20</span>
        </div>
        <div className="d-flex" style={{ marginTop: "30px" }}>
          <div>
            <img src={Image13} alt="image" className="image13" />
          </div>
          <div className="d-inline mx-4">
            <h3 className="maher">Achref Maher</h3>
            <p className="drabbad">
              Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok.
              Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod
              semigon. Rest reska inte eubel sasade. Du kan vara drabbad.
            </p>
            <div className="d-flex disli-rep">
              <p className="mx-2">
                <img src={thumbsupblack} /> Like{" "}
              </p>
              <p className="mx-2">
                <img src={thumbsdownblack} /> Dislike{" "}
              </p>
              <p className="mx-2">
                <MessageOutlined /> Reply{" "}
              </p>
            </div>
            <textarea
              className="form-control form-reply"
              id="exampleFormControlTextarea1"
              placeholder="Reply"
              rows="3"
            ></textarea>
            <div className="my-4 d-flex">
              <div>
                <img src={Image14} alt="image" className="image13" />
              </div>
              <div className="d-inline mx-4">
                <h3 className="maher">Amina Achref</h3>
                <p className="drabbad">
                  Lörem ipsum prektigt beren makroligt, till desena. Lasock
                  heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn
                  prertad krod semigon. Rest reska inte eubel sasade. Du kan
                  vara drabbad.
                </p>
                <div className="d-flex disli-rep">
                  <p className="mx-2 text-green">
                    <img src={thumbsupgreen} /> 20{" "}
                  </p>
                  <p className="mx-2 text-danger">
                    <img src={thumbsdownred} /> 30{" "}
                  </p>
                  <p className="mx-2">
                    <MessageOutlined /> Reply{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 d-flex">
          <div>
            <img className="avatar image13" src={Avatar} alt="image" />
          </div>
          <div className="d-inline mx-4">
            <h3 className="maher">Selma Achref</h3>
            <p className="drabbad">
              Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok.
              Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod
              semigon. Rest reska inte eubel sasade. Du kan vara drabbad.
            </p>
            <div className="d-flex disli-rep">
              <p className="mx-2">
                <img src={thumbsupblack} /> Like{" "}
              </p>
              <p className="mx-2">
                <img src={thumbsdownblack} /> Dislike{" "}
              </p>
              <p className="mx-2">
                <MessageOutlined /> Reply{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 d-flex">
          <div>
            <img className="avatar image13" src={Image15} alt="image" />
          </div>
          <div className="d-inline mx-4">
            <h3 className="maher">Ahmed Achref</h3>
            <p className="drabbad">
              Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok.
              Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod
              semigon. Rest reska inte eubel sasade. Du kan vara drabbad.
            </p>
            <div className="d-flex disli-rep">
              <p className="mx-2">
                <img src={thumbsupblack} /> Like{" "}
              </p>
              <p className="mx-2">
                <img src={thumbsdownblack} /> Dislike{" "}
              </p>
              <p className="mx-2">
                <MessageOutlined /> Reply{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bio2 d-flex">Ajouter un commentaire </div>
        <div className="comments">
          <label htmlFor="Commentaire">Commentaire</label>
          <textarea
            className="form-control form-reply"
            id="exampleFormControlTextarea1"
            placeholder="Commentaire"
            rows="3"
          ></textarea>
          <button className="btn-primary commenter">Commenter</button>
        </div>
      </div>
    </div>
  );
};

export default DrSalem;
