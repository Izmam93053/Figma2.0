import React from "react";
import "./Top.css";
import { Link } from "react-router-dom";
import Change from "../../Assets/Change.svg";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Select, Space } from "antd";
import France from "../../Assets/France (FR).svg";

const Top = () => {
  return (
    <div className="top">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex flex-wrap">
          <Link className="navbar-brand roal" to="">
            Rozaliss
          </Link>
            <div className="navbar-nav comp mx">
              <div className=" mx">
                <Link className="nav-link compte" aria-current="page" to="#">
                  Compte Proféssionel ?
                </Link>
              </div>
              <div className=" mx">
                <Link className="nav-link text-light" to="/blog">
                  Blog
                </Link>
              </div>
              <div className=" mx ">
                <div className="france">
                <img src={France} alt="icon" />
                <Select
                  defaultValue="Fr"
                  style={{
                    background: " #93C01F",
                  }}
                  options={[
                    {
                      value: "Ar",
                      label: "Ar",
                    },
                    {
                      value: "En",
                      label: "En",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
                </div>
              </div>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Top;
