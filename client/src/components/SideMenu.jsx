import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
 
  return (
    <div className="menu">
      <h1>Articles similaires</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link className='link' to={`/post/${post.id}`}>
             <button>Lire plus</button>                 
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
