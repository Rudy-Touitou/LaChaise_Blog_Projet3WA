import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {

  const state = useLocation().state;

  //description
  const [value, setValue] = useState(state?.value || "");
  //titre
  const [title, setTitle] = useState(state?.title || "");
  //categorie
  const [cat, setCat] = useState(state?.cat || "");
  //image
  const [file, setFile] = useState(null);

  const navigate = useNavigate()


  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file )
      const res = await axios.post("/upload", formData)
      return res.data

    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const imgUrl = await upload();

    try {
      state ? await axios.put(`/posts/${state.id}`, {
        title,
        description: value,
        cat,
        img:file? imgUrl : ""
      }) 
      : await axios.post(`posts/`, {
        title,
        description: value,
        cat,
        img:file? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      },{
        withCredentials:true,
      });
      navigate("/")
    } catch (err) {
      
    }
  };
    useEffect(() => {

      setValue(state?.description || "");

      setTitle(state?.title || "");

      setCat(state?.cat || "");
      
      setFile(state?.file || null);


    }, [state]);


  return (
    <div className='add'>
      <div className="content">
        <input type="text" 
        value={title} placeholder='Titre' 
        onChange={ e => setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className='editor' 
          theme="snow" 
          value={value} 
          onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publier un article</h1>
          <span>
            <b>Statut:</b> Brouillon
          </span>
          <span>
            <b>Visibilité:</b> Publique
          </span>
          <input type="file" name='' id='file'  onChange={ e => setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Envoyer une image</label>
            <span>(Renomer vos images, ex: "img1")</span>
          <div className="buttons">
            {/* <button>Sauvegarder le brouillon</button> */}
            <button onClick={handleClick}>Publier</button>
          </div>
        </div>
        <div className="item">
          <h1>Catégories</h1>
            <div className='writeCat'>
              <input type="radio" 
              checked={cat === "lachaise"} name='cat_lachaise' 
              value="lachaise" 
              id='laChaise' 
              onChange={ e => setCat(e.target.value)}/>
              <label htmlFor="LaChaise">LaChaise</label>
            </div>
            <div className='writeCat'>
              <input type="radio" 
              checked={cat === "vidéos"} name='cat_video' 
              value="vidéos" 
              id='vidéos' 
              onChange={ e => setCat(e.target.value)}/>
              <label htmlFor="vidéos">Vidéos</label>
            </div>
            <div className='writeCat'>
              <input type="radio" 
              checked={cat === "nourriture"} name='cat_nourriture' value="nourriture" 
              id='nourriture' 
              onChange={ e => setCat(e.target.value)}/>
              <label htmlFor="nourriture">Nourriture</label>
            </div>
            <div className='writeCat'>
              <input type="radio" 
              checked={cat === "lifestyle"} name='cat_lifestyle' 
              value="lifestyle" 
              id='lifestyle' 
              onChange={ e => setCat(e.target.value)}/>
              <label htmlFor="lifestyle">LifeStyle</label>
            </div>
            <div className='writeCat'>
              <input type="radio" 
              checked={cat === "anime"} name='cat_anime' 
              value="anime" 
              id='anime' 
              onChange={ e => setCat(e.target.value)}/>
              <label htmlFor="anime">Anime</label>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Write;