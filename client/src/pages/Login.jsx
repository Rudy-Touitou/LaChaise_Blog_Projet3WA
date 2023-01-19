// import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setImputs] = useState({
    username:"",
    password:"",
  });

  const [err,setError] = useState(null);


  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = e => {
    setImputs(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await login(inputs)
        navigate("/")
        alert("Vous êtes connecté ! 👍\nQuel plaisir de vous voir !");
    } catch (err) {
      setError(err.response.data);
    }
  };


    // Affichage formulaire Connexion

  return (
    <div className='auth'>
      <h1>Connexion</h1>
        <form>
          <input required type="text" 
            placeholder="Nom d'utilisateur" 
            name='username' 
            onChange={handleChange}>
          </input>
          <input required type="password" 
            placeholder='Mot de passe' 
            name='password' 
            onChange={handleChange}>
          </input>
          <button onClick={handleSubmit}>Connexion</button>
            {err && <p>{err}</p>}
          <span>
            Pas encore de compte ? <Link to="/register">Inscription</Link>
          </span>
        </form>
    </div>
  )
};

export default Login;