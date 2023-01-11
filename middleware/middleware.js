const Form=require("../model/formModel");
const Blog=require("../model/blogModel");
const Datee=require("../model/dateDisable");
exports.Formf = async (req, res, next) => {

    try {
        console.log(req.body);
        const Name=req.body.Name;
	    const Email=req.body.Email;
	    const No=req.body.No;
        const Number=req.body.Number;
	    const Location=req.body.Location;
        const startDate = req.body.startDate;
        const endDate=req.body.endDate;
        const startTime = req.body.startTime;
        const endTime=req.body.endTime;

        const newForm= new Form({
            Name: Name,
            Email: Email,
            No: No,
            Location: Location,
            startTime:startTime,
            endTime: endTime,
            startDate: startDate,
            endDate: endDate,
            Number: Number
        });   
	    console.log(newForm);
	    newForm.save();
        next();
    } 
    catch (error) {
        console.log(error);
    }
}

exports.BlogPost = async (req, res, next) => {

    try {
        console.log(req.body);
        const head=req.body.head;
	    const image=req.body.image;
	    const date=req.body.date;
	    const body=req.body.body;
	    const author = req.body.author;
        const newForm= new Blog({
            head : head,
            image : image,
            date: date,
            body: body,
            author: author
        });   
	    console.log(newForm);
	    newForm.save();
        next();
    } 
    catch (error) {
        console.log(error);
    }
}


exports.BlogGet = async (req, res, next) => {

    try {
        const orders = await Blog.find(
              {
                
              },
              {
                head:"$head",date:"$date",image:"$image",author:'$author',body:"$body"
              }
         );
          console.log(orders);
          res.status(200).json({     
              orders
          })

        //Blog.find({}).then(foundNotes =>res.json(foundNotes));
        next();
    } 
    catch (error) {
        console.log(error);
    }
}
exports.FormGet = async (req, res, next) => {

    try {
        const orders = await Form.find(
              {
                
              },
              {
                Name:"$Name",Email:"$Email",No:"$No",Number:'$Number',Location:"$Location",startDate:"$startDate",endDate:"$endDate",startTime:"$startTime",endTime:"$endTime",
              }
         );
          console.log(orders);
          res.status(200).json({     
              orders
          })

        //Blog.find({}).then(foundNotes =>res.json(foundNotes));
        next();
    } 
    catch (error) {
        console.log(error);
    }
}
exports.BlogGetP = async (req, res, next) => {

    try {
        const orders = await Blog.findOne(  
                {
                    "head": req.query.head                  
                },
                {
                    head:"$head",date:"$date",image:"$image",author:'$author',body:"$body"
                }
        );
        console.log(orders);
        res.status(200).json({     
            orders
        });

        //Blog.find({}).then(foundNotes =>res.json(foundNotes));
        next();
    } 
    catch (error) {
        console.log(error);
    }
}


exports.formDel = async (req, res, next) => {
    console.log(req.body.Name+",,"+req.body.Email);
    try {
        const orders = await Form.deleteOne(  
                {
                    "Name": req.body.Name,
                    "Email":req.body.Email                  
                }
        );
        console.log(orders);
        res.status(200).json({     
            orders
        });

        //Blog.find({}).then(foundNotes =>res.json(foundNotes));
        next();
    } 
    catch (error) {
        console.log(error);
    }
}

exports.dateadd = async (req, res, next) => {
    console.log(req.body.dates);
    try {
        let orders = await Datee.updateOne(
            {
                "Location":req.body.Location
            },
            {
                $push:{ "dates":{$each: req.body.dates}}
            });
            //next();
        } 
        catch (error) {
            console.log(error);
        }
}

exports.dateSend = async (req, res, next) => {
    console.log(req.query);
        const name=req.query.Location;
        Datee.find({Location:name})
                        .then(foundNotes =>res.json(foundNotes));
        
  }
