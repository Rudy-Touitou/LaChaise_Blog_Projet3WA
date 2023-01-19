import {db} from "../db.js"

            // RECUPERER TOUT LES POSTS

export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat= ? " : "SELECT * FROM posts";

    db.query(q,[req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

           // RECUPERER UN SEUL POST

export const getPost = (req,res) => {
    const q = "SELECT p.id, `username`,`title`, `description`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id=p.userId WHERE p.id = ? ";
    
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data[0]);
    })
};


