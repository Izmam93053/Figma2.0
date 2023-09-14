import React, { useState } from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Assets/Image.png";
import Banner from "../Assets/Banner.svg";
import Logo2 from "../Assets/Logo2.svg";
import Plus from "../Assets/Plus.svg";
import Image2 from "../Assets/Image2.svg";
import Image3 from "../Assets/Image3.svg";
import Image4 from "../Assets/Image4.svg";
import Image5 from "../Assets/Image5.svg";
import Image6 from "../Assets/Image6.svg";
import Image7 from "../Assets/Image7.svg";
import Image8 from "../Assets/Image8.svg";
import Image9 from "../Assets/Image9.svg";
import Image10 from "../Assets/Image10.svg";
import Image11 from "../Assets/Image11.svg";
import Image12 from "../Assets/Image12.svg";
import Avatar from "../Assets/Avatar.svg";
import Facebook from "../Assets/Facebook.svg";
import Twitter from "../Assets/Twitter.svg";
import Instagram from "../Assets/Instagram.svg";
import Linkedin from "../Assets/Linkedin.svg";
import Overlay from "../Assets/Overlay.svg";
import Lessthen from "../Assets/Lessthen.svg";
import Greaterthen from "../Assets/Greaterthen.svg";
import Icon from "../Assets/Icon.svg";
import Icon2 from "../Assets/Icon2.svg";
import Icon3 from "../Assets/Icon3.svg";
import Icon4 from "../Assets/Icon4.svg";
import Icon5 from "../Assets/Icon5.svg";
import Icon6 from "../Assets/Icon6.svg";
import Icon7 from "../Assets/Icon7.svg";
import Icon8 from "../Assets/Icon8.svg";
import Apple from "../Assets/Apple.svg";
import Location from "../Assets/Location.svg";
import Eye from "../Assets/Eye.svg";
import Checkmark from "../Assets/Checkmark.svg";
import Star from "../Assets/Star.svg";
import Heart from "../Assets/Heart.svg";
import Stroke from "../Assets/Stroke.svg";
import Background from "../Assets/Background.svg";
import Background2 from "../Assets/Background2.svg";
import Background3 from "../Assets/Background3.svg";
import Background4 from "../Assets/Background4.svg";
import Stroke2 from "../Assets/Stroke2.svg";
import Playstore from "../Assets/Playstore.svg";
import { Button, Dropdown, Select, Input, Space } from "antd";
import {
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Eyadaty from "../EyadatyPage/Eyadaty";
import Catagories from "../Catagories/Catagories";
import Clinic from "../ClinicPage/Clinic";
import Laboratoires from "../LaboratoiresPage/Laboratoires";
import Voir from "../Voirpage/Voir";
import About from "../Aboutpage/About";
const { Search } = Input;
const onSearch = (value) => {
  console.log(value);
};

const style = {
  fontSize: "12px",
  width: "178px",
};
const { Option } = Select;

const handleChange = (value) => {};
const Home = () => {
  return (
    <div className="home">
      <div className="emmet">
        <div className="row row1 ">
          <div className=" col-md-6 wp100">
            <img className="imageman2" src={Banner} alt="image" />
            <div className="conjectures">
              <div className="par">
                Retrouver la belle vie par une bonne santé.
              </div>
              <div className="para">
                <p>
                  Nous éliminons les conjectures pour trouver les bons médecins,
                  hôpitaux et soins pour vous et votre famille.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mx4">
            <img className="image imageman" src={Image} alt="image" />
          </div>
        </div>
      </div>
      <div className="sform">
        <div className="row row2">
          <Select
            labelInValue
            defaultValue={{
              value: "lucy",
              label: "Spécialité",
            }}
            style={{
              width: " 260px",
              marginRight: "20px",
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack (100)",
              },
              {
                value: "lucy",
                label: "Spécialité",
              },
            ]}
          />
          <Select
            labelInValue
            defaultValue={{
              value: "lucy",
              label: "Wilaya",
            }}
            style={{
              width: " 260px",
              marginRight: "20px",
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack (100)",
              },
              {
                value: "lucy",
                label: "Wilaya",
              },
            ]}
          />
          <Select
            labelInValue
            defaultValue={{
              value: "lucy",
              label: "Commune",
            }}
            style={{
              width: " 260px",
              marginRight: "20px",
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack (100)",
              },
              {
                value: "lucy",
                label: "Commune",
              },
            ]}
          />
          <Button
            style={style}
            className="pecii"
            type="primary"
            icon={<SearchOutlined />}
          >
            Chercher
          </Button>
        </div>
        <div className="rech">
          <p>
            Recherche Avancée
            <img src={Plus} alt="image" />
          </p>
        </div>
        <div className="des">
          <p>Historique des recherches</p>
        </div>
        <div className="slector2">
          <Select
            mode="multiple"
            style={{
              width: "98%",
              border: "1px white",
              fontSize: "12px",
              paddingLeft: "2em",
            }}
            placeholder="select one country"
            defaultValue={[
              " Géneraliste Oran ",
              "Cardiologie Médea",
              " Médicine Interne Alger",
              "Pédiatre Alger Borj Elkifane",
              "Urologie Alger",
            ]}
            onChange={handleChange}
            optionLabelProp="label"
          >
            <Option value="china" label="China">
              <Space>
                <span role="img" aria-label="China">
                  🇨🇳
                </span>
                China (中国)
              </Space>
            </Option>
            <Option value="usa" label="USA">
              <Space>
                <span role="img" aria-label="USA">
                  🇺🇸
                </span>
                USA (美国)
              </Space>
            </Option>
            <Option value="japan" label="Japan">
              <Space>
                <span role="img" aria-label="Japan">
                  🇯🇵
                </span>
                Japan (日本)
              </Space>
            </Option>
            <Option value="korea" label="Korea">
              <Space>
                <span role="img" aria-label="Korea">
                  🇰🇷
                </span>
                Korea (韩国)
              </Space>
            </Option>
          </Select>
        </div>
      </div>
      <div className="qui row">
        <div className=" col-md-6 img2">
          <img className="docmanimg" src={Image2} alt="image" />
        </div>
        <div className="col-md-6 nous">
          <p className="a">À propos de nous</p>
          <h1 className="sommes">Qui sommes nous?</h1>
          <p className="lore">
            Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok.
            Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod
            semigon. Rest reska inte eubel sasade. Du kan vara drabbad. Ananade
            krogogt fulparkerare. Speskade syll men polylunat biortad. Hell
            dede. Kasa keredybär.
          </p>
          <Button className="pxar" type="primary">
            Voir Plus <RightOutlined />
          </Button>
          <div className=" d-flex car">
            <div className=" h3600">
              <h1 className="h136">
                3600 <span className="green">+</span>{" "}
              </h1>
              <p className="patient">Patients heureux.</p>
            </div>
            <div className="  h3600">
              <h1 className="h136">
                1200 <span className="green">+</span>{" "}
              </h1>
              <p className="patient">Rendez-vous en ligne</p>
            </div>
          </div>
          <div className="d-flex car">
            <div className=" h3600">
              <h1 className="h136">
                20 <span className="green">+</span>{" "}
              </h1>
              <p className="patient">Des années d'expérience</p>
            </div>
            <div className="  h3600">
              <h1 className="h136">
                200 <span className="green">+</span>{" "}
              </h1>
              <p className="patient">Médecins et Cliniques</p>
            </div>
          </div>
        </div>
      </div>
      <Catagories />
      <div className="button text-center">
        <Link to="#" className="btn quvoir text-light bg-primary">
          <span className="spvoir">Voir tous les Laboratoires</span>{" "}
          <img src={Stroke2} alt="" />
        </Link>
      </div>
      <Eyadaty />
      <div className="colo">
        <Clinic />

        <div className="button text-center">
          <Link to="#" className="btn quvoir text-light bg-primary">
            <span className="spvoir">Voir tous les Cliniques</span>{" "}
            <img src={Stroke2} alt="" />
          </Link>
        </div>
        <Laboratoires />

        <div className="button text-center">
          <Link to="#" className="btn quvoir text-light bg-primary">
            <span className="spvoir">Voir tous les Laboratoires</span>{" "}
            <img src={Stroke2} alt="" />
          </Link>
        </div>
      </div>
      <div className="blacky2">
        <div className="row">
          <div className="sesen  p4y col-md-6">
            <h1 className="tro">Se sentir </h1>
            <h1 className="tro2"> mieux pour trouver des soins de santé</h1>
            <p className="hopi">
              Nous éliminons les conjectures pour trouver les bons médecins,
            </p>
            <p className="hopi2">
              {" "}
              hôpitaux et soins pour vous et votre famille.
            </p>
            <div className="doc2">
              <button className="quvoir2">
                Trouver un docteur{" "}
                <img className="stkbt" src={Stroke2} alt="image" />
              </button>
            </div>
          </div>
          <div className="col-md-5 p20">
            <img className="sesen2" src={Image12} alt="image" />
          </div>
        </div>
      </div>
      <Voir />
      <div className="button text-center">
        <Link to="#" className="btn quvoir text-light bg-primary">
          <span className="spvoir">Voir tous les articles</span>{" "}
          <img src={Stroke2} alt="" />
        </Link>
      </div>
      <About/>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Home;
