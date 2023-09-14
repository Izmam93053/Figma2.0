import { RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./Cardiology.css";
import { Link } from "react-router-dom";
import CombinedShape from "../Assets/Search.svg";
import Shape from "../Assets/ShapeChanger.svg";
import List from "../Assets/list 1.svg";
import Background13 from "../Assets/Background13.svg";
import Background14 from "../Assets/Background14.svg";
import Background15 from "../Assets/Background15.svg";
import Background16 from "../Assets/Background16.svg";
import Background17 from "../Assets/Background17.svg";
import Background18 from "../Assets/Background18.svg";
import Background19 from "../Assets/Background19.svg";
import Background20 from "../Assets/Background20.svg";
import Background21 from "../Assets/Background21.svg";
import Background22 from "../Assets/Background22.svg";
import Icon4 from "../Assets/Icon4.svg";
import Icon5 from "../Assets/Icon5.svg";
import Icon7 from "../Assets/Icon7.svg";
import Icon9 from "../Assets/Icon9.svg";
import Icon10 from "../Assets/Icon10.svg";
import Icon11 from "../Assets/Icon11.svg";
import Icon12 from "../Assets/Icon12.svg";
import Check from "../Assets/Checkmark.svg";
import Location from "../Assets/Location.svg";
import Star from "../Assets/Star.svg";
import Heart from "../Assets/Heart.svg";
import Eye from "../Assets/Eye.svg";
import { Input, Pagination, Select } from "antd";

const Cardiology = () => {
  const [layout, setLayout] = useState(false);
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);
  };
  const handleChange = () => {
    console.log("change occured");
  };
  const qtier =
    "Quartier des 400 logements, à côté du marché couvert, Beni  Slimane, Médea";
  return (
    <div className="cardiology">
      <div className="m10">
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
          <span className="text-primary">Cardiologie</span>
        </p>
        <div className="inp inpsearch">
          <Search
            placeholder="E-mail"
            allowClear
            enterButton="Abonnez"
            size="large"
            onSearch={onSearch}
          />
        </div>
        <div className="inp d-flex cardio-search2">
          <input className="cardio-search" placeholder="Cardiologie" type="text" />
        <img src={CombinedShape}  className="search" alt="icon"/>
        </div>
        <div className="d-flex legen">
          <div className="inp ">
            <label htmlFor="Commune">Commune</label>
            <div>
              <Select
                labelInValue
                defaultValue={{
                  value: "Commune",
                  label: "Commune",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Commune",
                    label: "Commune",
                  },
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
            </div>
          </div>
          <div className="inp ">
            <label htmlFor="Trier par">Services</label>
            <div>
              <Select
                labelInValue
                defaultValue={{
                  value: "Services",
                  label: "Services",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Services",
                    label: "Services",
                  },
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
            </div>
          </div>
          <div className="inp ">
            <label htmlFor="Trier par">Plus recent</label>
            <div>
              <Select
                labelInValue
                defaultValue={{
                  value: "Plus recent",
                  label: "Plus recent",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Plus recent",
                    label: "Plus recent",
                  },
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
            </div>
          </div>
          <div className="inp ">
            <label htmlFor="Le genre">Le genre</label>
            <div>
              <Select
                labelInValue
                defaultValue={{
                  value: "Le genre",
                  label: "Le genre",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Le genre",
                    label: "Le genre",
                  },
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
            </div>
          </div>
          <div className="inp ">
            <label htmlFor="Trier par">Options</label>
            <div>
              <Select
                labelInValue
                defaultValue={{
                  value: "Options",
                  label: "Options",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Options",
                    label: "Options",
                  },
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
            </div>
          </div>
          <div className="inp ">
          <button className="voir-btn2">Masquer la carte</button>
        </div>
        </div>
      </div>
      <div className="alleug row">
        <div className="map2">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205043.6915825921!2d2.700695974270869!3d36.58285208283957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f08274e3f7203%3A0x1b75ccbdec0d502e!2sBoufarik%2C%20Algeria!5e0!3m2!1sen!2s!4v1683808365043!5m2!1sen!2s"
            width="100%"
            height="1100px"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-6 p10">
          <h1 className="rechared">
            Recherche de <span className="text-primary">" Cardiologie "</span>
          </h1>
          <div className="d-flex d-cardieo">
            <p className="result55">
              Nous avons trouvé <span className="text-primary"> 1 - 55</span>{" "}
              résultats
            </p>
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
          <div className={layout ? "row space-betw" : "row"}>
            <div
              className={
                layout
                  ? "col-md-5 bor d-block my-4"
                  : "col-md-12 d-flex bor my-4 mx-0"
              }
            >
              <div className="card-img">
                <img className="card-image" src={Background19} alt="image" />
                <div className="img-group">
                  <img className="card-image2" src={Background14} alt="image" />
                  <img className="card-image2" src={Background13} alt="image" />
                  <img className="card-image2" src={Background15} alt="image" />
                  <img className="card-image2" src={Background16} alt="image" />
                  <img className="card-image2" src={Background17} alt="image" />
                </div>
              </div>
              <div className="card-body1">
                <div className="d-flex">
                  <img className="icon" src={Icon9} alt="icon" />
                  <div>
                    <h1 className="mechri">
                      Dr. Mechri Nasser{" "}
                      <img className="px-2" src={Check} alt="icon" />
                    </h1>
                    <p className="optha">Ophtalmologie</p>
                  </div>
                </div>
                <div className="d-inline-flex loco-marg">
                  <img src={Location} alt="icon" />
                  <p className="logements">
                    {qtier}
                  </p>
                </div>
                <div className="m55 d-flex">
                  <span className="mx2">
                    {" "}
                    <img src={Eye} alt="" /> 55k
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Heart} alt="" /> 240
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Star} alt="" /> 4.8
                  </span>
                </div>
              </div>
            </div>
            <div
              className={
                layout
                  ? "col-md-5 bor d-block my-4"
                  : "col-md-12 d-flex bor my-4 mx-0"
              }
            >
              <div className="card-img">
                <img className="card-image" src={Background18} alt="image" />
                <div className="img-group">
                  <img className="card-image2" src={Background14} alt="image" />
                  <img className="card-image2" src={Background13} alt="image" />
                  <img className="card-image2" src={Background15} alt="image" />
                  <img className="card-image2" src={Background16} alt="image" />
                  <img className="card-image2" src={Background17} alt="image" />
                </div>
              </div>
              <div className="card-body1">
                <div className="d-flex">
                  <img className="icon" src={Icon10} alt="icon" />
                  <div>
                    <h1 className="mechri">
                    Dr. Mnaser rafik{" "}
                      <img className="px-2" src={Check} alt="icon" />
                    </h1>
                    <p className="optha">Chirurgie Dentaire</p>
                  </div>
                </div>
                <div className="d-inline-flex loco-marg">
                  <img src={Location} alt="icon" />
                  <p className="logements">
                    {qtier}
                  </p>
                </div>
                <div className="m55 d-flex">
                  <span className="mx2">
                    {" "}
                    <img src={Eye} alt="" /> 55k
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Heart} alt="" /> 240
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Star} alt="" /> 4.8
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={layout ? "row space-betw" : "row"}>
            <div
              className={
                layout
                  ? "col-md-5 bor d-block my-4"
                  : "col-md-12 d-flex bor my-4 mx-0"
              }
            >
              <div className="card-img">
                <img className="card-image" src={Background20} alt="image" />
                <div className="img-group">
                  <img className="card-image2" src={Background14} alt="image" />
                  <img className="card-image2" src={Background13} alt="image" />
                  <img className="card-image2" src={Background15} alt="image" />
                  <img className="card-image2" src={Background16} alt="image" />
                  <img className="card-image2" src={Background17} alt="image" />
                </div>
              </div>
              <div className="card-body1">
                <div className="d-flex">
                  <img className="icon" src={Icon11} alt="icon" />
                  <div>
                    <h1 className="mechri">
                   <Link to="/drsalem" className="text-dark"> Dr. Othmani Salem{" "}</Link>
                      <img className="px-2" src={Check} alt="icon" />
                    </h1>
                    <p className="optha">Cardiologie</p>
                  </div>
                </div>
                <div className="d-inline-flex loco-marg">
                  <img src={Location} alt="icon" />
                  <p className="logements">
                    {qtier}
                  </p>
                </div>
                <div className="m55 d-flex">
                  <span className="mx2">
                    {" "}
                    <img src={Eye} alt="" /> 55k
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Heart} alt="" /> 240
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Star} alt="" /> 4.8
                  </span>
                </div>
              </div>
            </div>
            <div
              className={
                layout
                  ? "col-md-5 bor d-block my-4"
                  : "col-md-12 d-flex bor my-4 mx-0"
              }
            >
              <div className="card-img">
                <img className="card-image" src={Background21} alt="image" />
                <div className="img-group">
                  <img className="card-image2" src={Background14} alt="image" />
                  <img className="card-image2" src={Background13} alt="image" />
                  <img className="card-image2" src={Background15} alt="image" />
                  <img className="card-image2" src={Background16} alt="image" />
                  <img className="card-image2" src={Background17} alt="image" />
                </div>
              </div>
              <div className="card-body1">
                <div className="d-flex">
                  <img className="icon" src={Icon12} alt="icon" />
                  <div>
                    <h1 className="mechri">
                    Dr. Hmidouch Djamel{" "}
                      <img className="px-2" src={Check} alt="icon" />
                    </h1>
                    <p className="optha">Généraliste</p>
                  </div>
                </div>
                <div className="d-inline-flex loco-marg">
                  <img src={Location} alt="icon" />
                  <p className="logements">
                    {qtier}
                  </p>
                </div>
                <div className="m55 d-flex">
                  <span className="mx2">
                    {" "}
                    <img src={Eye} alt="" /> 55k
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Heart} alt="" /> 240
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Star} alt="" /> 4.8
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={layout ? "row space-betw" : "row"}>
            <div
              className={
                layout
                  ? "col-md-5 bor d-block my-4"
                  : "col-md-12 d-flex bor my-4 mx-0"
              }
            >
              <div className="card-img">
                <img className="card-image" src={Background22} alt="image" />
                <div className="img-group">
                  <img className="card-image2" src={Background14} alt="image" />
                  <img className="card-image2" src={Background13} alt="image" />
                  <img className="card-image2" src={Background15} alt="image" />
                  <img className="card-image2" src={Background16} alt="image" />
                  <img className="card-image2" src={Background17} alt="image" />
                </div>
              </div>
              <div className="card-body1">
                <div className= "d-flex">
                  <img className="icon icon7" src={Icon7} alt="icon" />
                  <div>
                    <h1 className="mechri">
                    El Bey Laboratoire{" "}
                      <img className="px-2" src={Check} alt="icon" />
                    </h1>
                    <p className="optha">Dr. Azmedroub Said</p>
                  </div>
                </div>
                <div className="d-inline-flex loco-marg">
                  <img src={Location} alt="icon" />
                  <p className= "logements">
                    {qtier}
                  </p>
                </div>
                <div className="m55 d-flex">
                  <span className="mx2">
                    {" "}
                    <img src={Eye} alt="" /> 55k
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Heart} alt="" /> 240
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Star} alt="" /> 4.8
                  </span>
                </div>
              </div>
            </div>
            <div
              className={
                layout
                  ? "col-md-5 bor d-block my-4"
                  : "col-md-12 d-flex bor my-4 mx-0"
              }
            >
              <div className="card-img">
                <img className="card-image" src={Background19} alt="image" />
              </div>
              <div className="card-body1">
                <div className={layout ? "d-flex" : "d-flex my-0 img-mx-2"}>
                  <img className="icon" src={Icon9} alt="icon" />
                  <div>
                    <h1 className="mechri">Dr. Mechri Nasser </h1>
                    <p className="optha">Ophtalmologie</p>
                  </div>
                </div>
                <div className="d-inline-flex loco-marg">
                  <img src={Location} alt="icon" />
                  <p className="logements">{qtier}</p>
                </div>
                <div className="m55 d-flex">
                  <span className="mx2">
                    {" "}
                    <img src={Eye} alt="" /> 55k
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Heart} alt="" /> 240
                  </span>
                  <span className="mx2">
                    {" "}
                    <img src={Star} alt="" /> 4.8
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="rpmn d-flex">
                <button className="prev">Précédent</button>
                <Pagination defaultCurrent={1} total={150} />
                <button className="nex">Suivant</button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205043.6915825921!2d2.700695974270869!3d36.58285208283957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f08274e3f7203%3A0x1b75ccbdec0d502e!2sBoufarik%2C%20Algeria!5e0!3m2!1sen!2s!4v1683808365043!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="px-4">
      <button className="voir-btn mx-2">Voir plus</button>
      </div>
    </div>
  );
};

export default Cardiology;
