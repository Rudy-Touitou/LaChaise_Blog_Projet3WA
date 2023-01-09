import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";


const Header = () => {

    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="LogoLaChaise" />
                    </Link>
                </div>
                <div className="navbar">
                    <Link className="link" to="/?cat=lachaise">
                        <h6>LaChaise</h6>
                    </Link>
                    <Link className="link" to="/?cat=videos">
                        <h6>Vidéos</h6>
                    </Link>
                    <Link className="link" to="/?cat=nourriture">
                        <h6>Nourriture</h6>
                    </Link>
                    <Link className="link" to="/?cat=lifestyle">
                        <h6>LifeStyle</h6>
                    </Link>
                    <Link className="link" to="/?cat=anime">
                        <h6>Anime</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? <span onClick={logout}>Se déconnecter</span> : <Link className="link" to="/login">Se connecter</Link>}
                    <span className="write">
                        <Link className="link" to="/write">Publier</Link>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Header;