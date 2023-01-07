
const express = require("express");
const app=express();
const router = express.Router();
const Form=require("../model/FormModel");
const {Formf ,BlogPost ,BlogGet, BlogGetP } = require("../middleware/middleware");


router.post("/form", Formf);
router.post("/AddBlog",BlogPost);
router.get("/blog",BlogGet);
router.get("/blogP",BlogGetP);
// router.route("/form").post((req,res)=>{ //note making
// 	console.log(req.body);
// });

module.exports=router;
