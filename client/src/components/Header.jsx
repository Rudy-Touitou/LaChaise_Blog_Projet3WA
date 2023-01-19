import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import NavBar from "./NavBar";

const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="LogoLaChaise" />
                    </Link>
                </div>
                <NavBar />
            </div>
        </header>
    )
};

export default Header;