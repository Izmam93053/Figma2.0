import { RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import CombinedShape from "../Assets/Search.svg";
import Background5 from "../Assets/Background5.svg";
import Background6 from "../Assets/Background6.svg";
import Background7 from "../Assets/Background7.svg";
import Background8 from "../Assets/Background8.svg";
import Background9 from "../Assets/Background9.svg";
import Background10 from "../Assets/Background10.svg";
import Background11 from "../Assets/Background11.svg";
import Background12 from "../Assets/Background12.svg";
import Shape from "../Assets/ShapeChanger.svg";
import List from "../Assets/list 1.svg";
import Icon13 from "../Assets/Icon13.svg";
import Avatar from "../Assets/Avatar.svg";
import { Pagination, Select } from "antd";
import Eyadaty from "../EyadatyPage/Eyadaty";
import About from "../Aboutpage/About";

const Blog = () => {
  const [layout, setLayout] = useState(true);
  const handleChange = () => {
    console.log("Handle clicked");
  };
  const une = "Une hernie discale lombaire ventrale..";
  const lorem =
    "Lörem ipsum tempofiering reastat fastän treck, i tirade. Sitskate diledes tills nyk till funkis.";
  return (
    <div className="blog">
      <p className="accp2">
        <Link className="accp text-dark" to="/">
          Accueil
        </Link>{" "}
        <span className="outright">
          <RightOutlined />
        </span>{" "}
        <span className="text-primary">Blog</span>
      </p>
      <h1 className="hblog">Voir notre </h1>
      <h1 className="hblog2">dernier blog</h1>
      <div className="d-flex flex-wrap m100">
        <div className="inp inpsearch">
          <label htmlFor="Chercher...">Chercher</label>
          <form className="d-flex ali">
            <input
              className="form-control inparea"
              type="search"
              placeholder="Chercher..."
              aria-label="Search"
            />
            <button className="btn searchb" type="submit">
              <img src={CombinedShape} alt="svg" />{" "}
            </button>
          </form>
        </div>
        <div className="inp inpcat">
          <label htmlFor="Trier par">Catégories</label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Catégories</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>
        <div className="inp">
          <label htmlFor="Trier par">Trier par</label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Trier par</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>
        <div className="inp inp2">
          <p className="aff">
            <span className="chage">Affichage </span>
            <Link to="#">
              {" "}
              <img
                src={Shape}
                className={layout ? "list bg-primary" : "list bgLight"}
                onClick={() => setLayout(true)}
                alt="icon"
              />
              <img
                src={List}
                onClick={() => setLayout(false)}
                className={layout ? "list bgLight" : "list bg-primary"}
                alt="icon"
              />
            </Link>
          </p>
        </div>
      </div>
      <div className="row m10">
        <div className="col-md-4 ctg">
          <h1 className="categories">Catégories</h1>
          <p className="gen">
            Généraliste <span className="sp">100</span>
          </p>
          <p className="gen">
            Chirurgie dentaire <span className="sp">100</span>
          </p>
          <p className="gen">
            ORL <span className="sp">100</span>
          </p>
          <p className="gen">
            Ophtalmologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Dermato-Vénérologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Chirurgie esthétique <span className="sp">100</span>
          </p>
          <p className="gen">
            Pneumo-Phtisio-Allergologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Cardiologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Diabéto-Endocrinologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Hepato-Gastro-Entérologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Médecine interne <span className="sp">100</span>
          </p>
          <p className="gen">
            Gynéco-Obstétrique <span className="sp">100</span>
          </p>
          <p className="gen">
            Pediatrie <span className="sp">100</span>
          </p>
          <p className="gen">
            Chirurgien Pédiatrique <span className="sp">100</span>
          </p>
          <p className="gen">
            Chirurgie générale <span className="sp">100</span>
          </p>
          <p className="gen">
            Orthopédie-Traumatologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Rhumatologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Kinésithérapie et Rééducation Fonctionnelle{" "}
            <span className="sp">100</span>
          </p>
          <p className="gen">
            Urologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Néphrologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Neurologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Neuropsychiatrie <span className="sp">100</span>
          </p>
          <p className="gen">
            Psychiatrie <span className="sp">100</span>
          </p>
          <p className="gen">
            Orthophoniste <span className="sp">100</span>
          </p>
          <p className="gen">
            Psycologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Radiologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Hématologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Biologie <span className="sp">100</span>
          </p>
          <p className="gen">
            Biochimie <span className="sp">100</span>
          </p>
          <p className="gen">
            Vétérinaire <span className="sp">100</span>
          </p>
          <p className="gen">
            Nutritionniste <span className="sp">100</span>
          </p>
          <p className="gen">
            Centre de beauté et médecine alternative{" "}
            <span className="sp">100</span>
          </p>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className={layout ? "col-md-6" : "col-md-12 "}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background5} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Chirurgie Dentaire</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={layout ? "col-md-6 sthato" : "col-md-12"}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background6} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Cardiologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={layout ? "col-md-6" : "col-md-12 "}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background7} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={layout ? "col-md-6 sthato" : "col-md-12"}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background8} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={layout ? "col-md-6" : "col-md-12 "}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background9} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={layout ? "col-md-6 sthato" : "col-md-12"}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background10} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={layout ? "col-md-6" : "col-md-12 "}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background11} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={layout ? "col-md-6 sthato" : "col-md-12"}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background12} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rpmn d-flex">
            <button className="prev">Précédent</button>
            <Pagination defaultCurrent={1} total={150} />
            <button className="nex">Suivant</button>{" "}
          </div>
        </div>
        <button className="voir-btn">Voir plus</button>
      </div>
      <Eyadaty />
      <About />
    </div>
  );
};

export default Blog;
