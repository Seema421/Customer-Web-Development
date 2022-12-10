const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
//const route = require('./routes/route');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const hbs = require('hbs');
const Register = require('./models/customer');

const { urlencoded } = require('express');
app.use(express.json());
//because we are bringing data from our url
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.json());
mongoose.connect("mongodb+srv://Seema:C5PtEdt23kmtx9ov@cluster0.gjunl.mongodb.net/CustomerWEbDevelopment?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(()=>{
    console.log('MongoDb is connected')
})
.catch(err=>{
    console.log(err)
});
const static_path= path.join(__dirname, '../public');
const template_path= path.join(__dirname, '../templates/views');
const partials_path= path.join(__dirname, '../templates/partials');

app.use(express.static(static_path));
//app.use('/', route);
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
    res.render("home")
});


app.get("/home",(req,res)=>{
    res.render("home")
});

app.get("/register",(req,res)=>{
    res.render("register")
});
//creating new user in data base
app.post("/register", async(req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword ){
            //Register is our customer model
            
            const registerCustomer = new Register({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                userName : req.body.userName,
                email : req.body.email,
                phone : req.body.phone,
                dob : req.body.dob,
                gender : req.body.gender,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
                
            });
            const registered=await registerCustomer.save()
            res.status(201).render('index')
        }else {
            res.send('Password does not match');
        }
    } catch(error){
        res.status(400).send(error)
    }
});
app.get("/login",(req,res)=>{
    res.render("login")
});

app.get('/',(req,res)=>{
    res.render('index')
});
app.listen(process.env.Port || 3000, ()=>{
    console.log('Express app is running on port ' + (process.env.Port || 3000))
})