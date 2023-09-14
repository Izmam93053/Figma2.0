import React from 'react'
import "./Eyadaty.css";
import Playstore from "../Assets/Playstore.svg";
import Apple from "../Assets/Apple.svg";
import Image3 from "../Assets/Image3.svg";

const Eyadaty = () => {
  return (
    <div className="appli">
        <div className="headline">
          <div className="d-flex">
            <div className="d-flex charge">
              <div className="gez">
                <div className="happle">
                <h1 className="eya">
                  {" "}
                  <div>Téléchargez</div> l'application Eyadaty.
                </h1>

                <p className="soin text-light">
                  Et prenez bien soin de votre santé.
                </p>
                </div>
                <div className="d-flex appleapp">
                  <div className="d-flex cationn">
                    <div className="head">
                      <p className="tele">Téléchargez l'application depuis</p>
                      <h1 className="my-0 astore">Apple Store</h1>
                    </div>
                    <div className="headicon">
                      {" "}
                      <img src={Apple} alt="image" />
                    </div>
                  </div>
                  <div className="d-flex cationn">
                    <div className="head">
                      <p className="tele">Téléchargez l'application depuis</p>
                      <h1 className="my-0 astore">Google Store</h1>
                    </div>
                    <div className="headicon">
                      {" "}
                      <img src={Playstore} alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex hand">
              <img className='handimage' src={Image3} alt="image" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Eyadaty
