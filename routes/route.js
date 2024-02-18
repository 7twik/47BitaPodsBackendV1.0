
const Form=require("../model/formModel");
const {Formf ,BlogPost ,BlogGet, BlogGetP,FormGet, formDel,dateadd, dateSend} = require("../middleware/middleware");


router.post("/form", Formf);
router.post("/AddBlog",BlogPost);
router.get("/blog",BlogGet);
router.get("/blogP",BlogGetP);
router.get("/formGet",FormGet);
router.post("/formdel",formDel);
router.post("/date",dateadd);
router.get("/dateget",dateSend)
// router.route("/form").post((req,res)=>{ //note making
// 	console.log(req.body);
// });

module.exports=router;
