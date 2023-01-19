import React, {useState} from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";


// const BurgerMenu = () => {

//     const { currentUser, logout } = useContext(AuthContext);

//     return (
        
//         <div className="navbar">
//             <Link className="link" to="/?cat=lachaise">
//                 <h6>LaChaise</h6>
//             </Link>
//             <Link className="link" to="/?cat=videos">
//                 <h6>Vidéos</h6>
//             </Link>
//             <Link className="link" to="/?cat=nourriture">
//                 <h6>Nourriture</h6>
//             </Link>
//             <Link className="link" to="/?cat=lifestyle">
//                 <h6>LifeStyle</h6>
//             </Link>
//             <Link className="link" to="/?cat=anime">
//                 <h6>Anime</h6>
//             </Link>
//             <span className="link" >{currentUser?.username}</span>
//             {currentUser ? <span className="link" onClick={logout}>Se    déconnecter</span> : <Link className="menu-item" to="/login">Se connecter</Link>}
//             <span className="write">
//             <Link className="link" to="/write">Publier</Link>
//             </span>
//         </div>
           
//     )
// };

// export default BurgerMenu;

const BurgerMenu = () => {

    const { currentUser, logout } = useContext(AuthContext);

   // to change burger classes
   const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
   const [menu_class, setMenuClass] = useState("menu hidden")
   const [isMenuClicked, setIsMenuClicked] = useState(false)

   // toggle burger menu change
   const updateMenu = () => {
       if(!isMenuClicked) {
           setBurgerClass("burger-bar clicked")
           setMenuClass("menu visible")
       }
       else {
           setBurgerClass("burger-bar unclicked")
           setMenuClass("menu hidden")
       }
       setIsMenuClicked(!isMenuClicked)
   }

   return(
       <div>
           <nav>
               <div className="burger-menu" onClick={updateMenu}>
                   <div className={burger_class} ></div>
                   <div className={burger_class} ></div>
                   <div className={burger_class} ></div>
               </div>
           </nav>

           <div className={menu_class}>
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
                <span className="link" >{currentUser?.username}</span>
                {currentUser ? <span className="link" onClick={logout}>Se        déconnecter</span> : <Link className="menu-item" to="/login">Se connecter</Link>}
                <span className="write">
                <Link className="link" to="/write">Publier</Link>
                </span>
            </div>
           </div>
       </div>
   )
};

export default BurgerMenu;