import React from 'react'
import "./Bottom.css";
import { Link } from 'react-router-dom';
import CombinedShape from "../../Assets/Search.svg";
import Logo from "../../Assets/Logo.svg";

const Bottom = () => {
    return (
        <div className='bottom'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand mx" to="#"><img src={Logo} alt="logo" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx">
                            <li className="nav-item">
                                <Link className="nav-link current" aria-current="page" to="/">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">À propos de nous</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="#">Contactez-nous</Link>
                            </li>
                        </ul>
                        <form className="d-flex ali">
                            <input className="form-control " type="search" placeholder="Chercher..." aria-label="Search" />
                            <button className="btn searchb" type="submit"><img src={CombinedShape} alt="svg" /> </button>
                        </form>
                        <ul className="navbar-nav lef">
                            <li className="nav-item xion mx-2">
                                <Link className="connect"  to="/login">Connexion</Link>
                            </li>
                            <li className="nav-item cnd">
                                <Link className=" sinc mx-2"  to="#">S'inscrire</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    
    )
    }

export default Bottom;
