import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";


const app = express()
app.use(cors())
app.use(cookieParser())

    // Permet d'envoyer des données à la BDD:
app.use(express.json())



        // Destination des images uploadées:
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        //empêche une img du même nom d'écraser la précédente:
        cb(null, Date.now()+file.originalname)
    }
})


        // Multer pour la gestion d'upload d'images:
const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file;
res.status(200).json(file.filename)
})


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)



app.listen(8800,() => {
    console.log("Connecté sur le port 8800!")
})