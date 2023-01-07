const Form=require("../model/formModel");
const Blog=require("../model/blogModel")
exports.Formf = async (req, res, next) => {

    try {
        console.log(req.body);
        const Name=req.body.Name;
	    const Email=req.body.Email;
	    const No=req.body.No;
        const Number=req.body.Number;
	    const Location=req.body.Location;
	    const Days = req.body.Days;
        const Date = req.body.Date;

        const newForm= new Form({
            Name: Name,
            Email: Email,
            No: No,
            Location: Location,
            Days: Days,
            Date: Date,
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
