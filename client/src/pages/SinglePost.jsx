import React, { useEffect, useState } from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import SideMenu from "../components/SideMenu";
import axios from 'axios';
import moment from 'moment';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';


const SinglePost = () => {
  
  const [post,setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)


  useEffect(()=> {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [postId]);

  const handleDelete = async ()=> {
    try {
      await axios.delete(`/posts/${postId}`)
        //revenir à la home après suppression 
        navigate("/")
    } catch (err) {
      console.log(err);
    }
  }
    // Affichage de l'article

    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }

  return (
    <div className='single'>
      <div className="content">
      <img src={`../upload/${post?.img}`} alt="PostImage" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="UserImg" />}
          <div className="info">
              <span>{post.username}</span>
              <p>Posté {moment(post.date).fromNow()}</p>
          </div>
          {currentUser && (
            currentUser.username === post.username && (
          <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
            <img src={Edit} alt="EditImg" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="DeleteImg" />
          </div>
          ))}
        </div>
        <h1>{post.title}</h1>
          {getText(post.description)}
      </div>
      <SideMenu cat={post.cat}/>
    </div>
  )
};

export default SinglePost;
