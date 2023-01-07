require("dotenv").config();
const express = require("express");
const app=express();
const cors = require("cors");
const bp = require('body-parser');
const router = express.Router();
const routes=require("./routes/route");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://7twik:zKqW0UzgQO3G3iMy@cluster0.sjxr9uv.mongodb.net/47BitaPods" ,()=> console.log("connected to db"));
app.use(bp.json());
app.use(cors()); 
app.use(bp.urlencoded({ extended: true }));
app.use("",routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));