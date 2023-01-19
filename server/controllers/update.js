import {db} from "../db.js"
import jwt from "jsonwebtoken";

            // UPDATER UN POST 

export const updatePost = (req,res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Non authentifié !");

    jwt.verify(token,"jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Le token n'est pas valide !");
        
        const postId = req.params.id

        const q = "UPDATE posts SET `title`=?, `description`=?, `img`=?, `cat`=? WHERE `id` = ? AND `userId` = ?";

        const values = [
            req.body.title,
            req.body.description,
            req.body.img,
            req.body.cat,
        ];
        db.query(q, [...values,postId, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("L'article a été mis à jour.");
        });
});
}