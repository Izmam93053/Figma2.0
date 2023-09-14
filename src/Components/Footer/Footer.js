import React from "react";
import "./Footer.css";
import Linkedin2 from "../Assets/Linkedin2.svg";
import Envelope from "../Assets/Envelope_icon.svg";
import Phone from "../Assets/Phone_icon.svg";
import Marker from "../Assets/Marker_icon.svg";
import Instagram2 from "../Assets/Instagram2.svg";
import Facebook2 from "../Assets/Facebook2.svg";
import Twitter2 from "../Assets/Twitter2.svg";
import Logo2 from "../Assets/Logo2.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blacky">
        <div className="row m100x">
          <div className="col-md-3">
            <div className="complogo">
              <img src={Logo2} alt="" />
            </div>
            <p className="prektigt">
              Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok.
              Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod
              semigon.
            </p>
            <div className="icosf2">
              <span className="face2">
                <img src={Facebook2} alt="" />
              </span>
              <span className="face2">
                <img src={Twitter2} alt="" />
              </span>
              <span className="face2">
                <img src={Instagram2} alt="" />
              </span>
              <span className="face2">
                <img src={Linkedin2} alt="" />
              </span>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div className="col-md-6 rpm">
              <h1 className="Liens">Liens</h1>
              <p className="propde acc">Accueil</p>
              <p className="propde">À propos de nous</p>
              <p className="propde">Rozaliss</p>
              <p className="propde">Termes et conditions</p>
              <p className="propde">Politique de confidentialité</p>
            </div>
            <div className="col-md-6 rpm rpm2">
              <div className="tac">
                <p className="propde acc">Blog</p>
                <p className="propde">Contactez-nous</p>
                <p className="propde">Notre partenaires</p>
                <p className="propde">FAQ</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <h1 className="Liens">Contactez-nous</h1>
            <p className="propde acc">
              {" "}
              <img className="phone" src={Envelope} alt="ico" />
              <span> Eyadaty@email.com</span>
            </p>
            <p className="propde">
              <img className="phone" src={Phone} alt="ico" />
              <span>+213540070124</span>
            </p>
            <p className="propde">
              <img className="phone" src={Marker} alt="ico" />
              <span>Algiers, Algeria</span>
            </p>
            <p className="propde">
              <img className="phone" src={Phone} alt="ico" />
              <span>+213540070124</span>
            </p>
          </div>
          <div className="col-md-3">
            <h1 className="Liens">Abonnez-nous</h1>
            <input type="email" className="email2" placeholder="E-mail" />
            <button type="button" className="btn btn-primary priabo">
              Abonnez
            </button>
          </div>
        </div>
        <hr className="hr" />
        <p className=" droson"> Tous Les Droits Sont Réservés Pour Ce Site </p>
      </div>
    </div>
  );
};

export default Footer;
