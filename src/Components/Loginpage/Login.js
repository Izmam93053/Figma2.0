import React from "react";
import "./Login.css";
import Illustration from "../Assets/Illustration.svg";
import Frame from "../Assets/Frame.svg";
import Frame2 from "../Assets/Frame 2.svg";
import Frame3 from "../Assets/Frame3.svg";
import {
  RightOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Input, Space } from "antd";
import Eyadaty from "../EyadatyPage/Eyadaty";
import { Link } from "react-router-dom";

const Login = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="login">
      <div className="accuil">
        <p className="accp">
        <Link className="accp text-dark" to="/">Accueil</Link> {" "}
          <span className="outright">
            <RightOutlined />
          </span>{" "}
          <span className="current">S'inscrire</span>
        </p>
        <div className="row">
          <div className="creer col-md-5">
            <h1 className="unreer">Créer un </h1>
            <h1 className="unreer compt">compte</h1>
            <p className="vous">
              Vous avez déjà un compte?{" "}
              <span className="current"> Connexion</span>
            </p>
            <Space direction="vertical">
              <div className="spea">
                <p className="maile">E-mail</p>
                <Input placeholder="E-mail" />
              </div>
              <div className="spea">
                <p className="maile">Mot de passe</p>
                <Input.Password placeholder="Mot de passe" />
              </div>
              <div className="spea">
                <p className="maile">Répéter mot de passe</p>
                <Input.Password
                  placeholder="Répéter mot de passe"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone className="eyetwo" />
                    ) : (
                      <EyeInvisibleOutlined />
                    )
                  }
                />
              </div>
            <Checkbox className="jaccep" onChange={onChange}>
              J'ai lu et j'accepte{" "}
              <span className="current"> la politique de confidentialité</span>
            </Checkbox>
            </Space>
            <div>
              <Button className="pinsb" type="primary">
                S’inscrire
              </Button>
            </div>
            <hr className="hr" />
            <p className="oup">Ou</p>
            <div className="goologo">

              <img className="frame" src={Frame} alt="icon" /><img className="frame" src={Frame2} alt="icon" /><img className="frame" src={Frame3} alt="icon" />
            </div>
          </div>
          <div className="flex-wrape col-md-4">
            <img className="illustration" src={Illustration} alt="" />
          </div>
        </div>
      </div>
      <Eyadaty/>
    </div>
  );
};

export default Login;
