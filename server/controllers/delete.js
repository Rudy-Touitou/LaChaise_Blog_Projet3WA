import {db} from "../db.js"
import jwt from "jsonwebtoken";

            // SUPPRIMER UN POST 

export const deletePost = (req,res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Non authentifié !");

    jwt.verify(token,"jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Le token n'est pas valide !");

        const postId = req.params.id;
        const q = "DELETE FROM posts WHERE `id` = ? AND `userId` = ?"

        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) return res.status(403).json("Vous pouvez supprimer seulement vos articles ! ")

            return res.json("Article supprimé !");
        })
    })
}

