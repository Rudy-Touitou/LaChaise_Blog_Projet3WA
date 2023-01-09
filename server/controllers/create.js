import {db} from "../db.js"
import jwt from "jsonwebtoken";

            // AJOUTER UN POST 


export const addPost = (req,res) => {

    const token = req.cookies.access_token
    jwt.verify(token,"jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Le token n'est pas valide !");

        const q = "INSERT INTO posts (`title`,`description`, `img`, `cat`, `date`, `userId`) VALUES (?)"

        const values = [
            req.body.title,
            req.body.description,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.id
            // req.body.userId
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            
            return res.json("L'article est publié.");
        });

});
};

