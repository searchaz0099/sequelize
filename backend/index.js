import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors"
import productRoute from "./rtss/Productrrt.js"

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(productRoute)

app.listen(3000, ()=>{
    console.log(`app running, click me http://localhost:3000/`)
})