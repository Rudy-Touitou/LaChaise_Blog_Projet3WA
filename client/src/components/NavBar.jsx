import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import BurgerMenu from "./BurgerMenu";


// const NavBar = () => {

//     const { currentUser, logout } = useContext(AuthContext);

//     return (
//         <div className="navbar">
            // <Link className="link" to="/?cat=lachaise">
            //     <h6>LaChaise</h6>
            // </Link>
            // <Link className="link" to="/?cat=videos">
            //     <h6>Vidéos</h6>
            // </Link>
            // <Link className="link" to="/?cat=nourriture">
            //     <h6>Nourriture</h6>
            // </Link>
            // <Link className="link" to="/?cat=lifestyle">
            //     <h6>LifeStyle</h6>
            // </Link>
            // <Link className="link" to="/?cat=anime">
            //     <h6>Anime</h6>
            // </Link>
            // <span>{currentUser?.username}</span>
            // {currentUser ? <span onClick={logout}>Se déconnecter</span> : <Link className="link" to="/login">Se connecter</Link>}
            // <span className="write">
            // <Link className="link" to="/write">Publier</Link>
            // </span>
//         </div>
           
//     )
// };

// export default NavBar;

const NavBar = () => {

    const { currentUser, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    // useEffect pour récupérer la largeur de la fenêtre
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    // Définir le point de rupture pour lequel le burger menu sera utilisé
    const breakpoint = 480;
    return (
      <>
      {windowWidth < breakpoint ? (
        <BurgerMenu isOpen={menuOpen} onStateChange={state => setMenuOpen(state.isOpen)} />
      ) : (
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
      )}
      </>
    );
  }

  export default NavBar;