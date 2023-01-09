import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";



const Register = () => {
  const [inputs, setImputs] = useState({
    username:"",
    email:"",
    password:"",
  });

  const [err,setError] = useState(null);


  const navigate = useNavigate();

  const handleChange = e => {
    setImputs(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async e => {
      // Éviter le rechargerment de la page au clic du bouton:
    e.preventDefault();
    try{
          // Endpoint direct grâce au proxy dans le package.json:
      await axios.post("/auth/register", inputs);
      navigate("/login");
      alert("utilisateur enregistré")
    } catch (err) {
      setError(err.response.data);
    }
  };

    // Affichage formulaire Inscription

  return (
    <div className='auth'>
      <h1>S'inscrire</h1>
        <form>
          <input required type="text" 
            placeholder="Nom d'utilisateur" 
            name='username' 
            onChange={handleChange}>
          </input>
          <input required type="email" 
            placeholder='Email' 
            name='email' 
            onChange={handleChange}>
          </input>
          <input required type="password" 
            placeholder='Mot de passe' 
            name='password' 
            onChange={handleChange}>
          </input>
          <button onClick={handleSubmit}>Inscription</button>
            {err && <p>{err}</p>}
          <span>
            Avez-vous déjà un compte ? <Link to="/login">Connexion</Link>
          </span>
        </form>
    </div>
  )
};

export default Register;