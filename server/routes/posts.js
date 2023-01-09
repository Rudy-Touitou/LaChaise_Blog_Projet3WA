import express, { Router } from "express"

import { addPost } from "../controllers/create.js"
import { deletePost } from "../controllers/delete.js"
import { updatePost } from "../controllers/update.js"
import { getPost, getPosts } from "../controllers/post.js"


    // Permet de faire des requêtes via le Routeur:
const router = express.Router ()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)



export default router