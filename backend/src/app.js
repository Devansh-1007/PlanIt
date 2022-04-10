const express =require('express');
const path =require('path');
const app =express();
const hbs =require('hbs');
    
require("./db/conn");
const Register =require("./models/registers");
const Admin =require("./models/admin");
const port =process.env.PORT  || 3000;

const templates_path =path.join(__dirname, '../templates/views');
const partials_path =path.join(__dirname, '../templates/partials');
// console.log(path.join(__dirname, '../templates/views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// console.log(path.join(__dirname, '../public'));

app.use(express.static(templates_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

app.get('/',(req,res) =>{
    res.render("index")
});

app.get("/register", (req,res) =>{
     res.render("register");
});
app.get("/adminregister", (req,res) =>{
     res.render("adminregister");
});


app.post("/register",  async (req,res) =>{
    try {
        const password =req.body.password;
        const confirmpassword =req.body.confirmpassword;
        if(password===confirmpassword){
            const registerStudent = new Register({
                name : req.body.name,
                phone : req.body.phone,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword,
                email : req.body.email,
                gender : req.body.gender,
                branch : req.body.branch
            })
         const registered = await registerStudent.save();
         res.status(201).render("login");
        }
        else{
            res.send("Password do not match");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});
app.post("/adminregister",  async (req,res) =>{
    try {
        const adminpassword =req.body.password;
        const adminconfirmpassword =req.body.confirmpassword;
        if(adminpassword===adminconfirmpassword){
            const registerAdmin = new Admin({
                name : req.body.name,
                phone : req.body.phone,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword,
                email : req.body.email,
                gender : req.body.gender,
                branch : req.body.branch
            })
         const adminregistered = await registerAdmin.save();
         res.status(201).render("login");
        }
        else{
            res.send("Password do not match");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});


app.post("/login",async (req,res) =>{
    try {
        const email =req.body.email;
        const password =req.body.password;
     const useremail = await Register.findOne({email:email});
     if(useremail.password=== password){
         res.render("dashboard");
     }
     else{
         res.send("invalid password");
     }

    } 
    catch (error) {
        res.status(400).send("invalid login details")
    }
});

app.get("/login",(req,res) =>{
    res.render("login");
});
app.get("/teaminfo",(req,res) =>{
    res.render("teaminfo");
});


app.get("/calendar",(req,res) =>{
    res.render("calendar");
});


app.get("/todolist",(req,res) =>{
    res.render("todolist");
});


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})