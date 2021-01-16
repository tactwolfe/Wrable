require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

app.use(express.static('public'));

//for parsing json data
app.use(bodyParser.urlencoded({extended : true}));

//initializing our session
app.use( session({
  secret : "why the fuck i am doing this ? ",
  resave : false,
  saveUninitialized : false
}));

//initialize passport
app.use( passport.initialize());

//to tell our app to use passport to set up our session
app.use( passport.session());


//to connect to our mongoDB
mongoose.connect("mongodb://localhost:27017/userDataBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.set("useCreateIndex", true); //to handle collection.ensureIndex deprecretion warning we get while using session//

//schema for our post collection
const postSchema = {
  userId: String,
  post:String,
  like:Number
};

//model for our posts
const Post =  mongoose.model('Post',postSchema);

//schema for our user Collection
const userSchema = new mongoose.Schema({
  username : String,
  email: String,
  password : String
});

//use this to hash and salt our password and save this to mongoDB
userSchema.plugin(passportLocalMongoose);

//models for users
const User = mongoose.model("User", userSchema);

//creating passport local stratergy here
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());  //to save user creddential for authentication//
passport.deserializeUser(User.deserializeUser()); //to use save info to verify authentication of user//




//post method for our register
app.post('/register',(req,res)=>{
  // console.log(req.body);
  User.register(({name: req.body.name,email: req.body.email}),req.body.password, (err,user)=>{
    if(err){
      console.log(err);
      res.redirect('/register');
    }else{
      passport.authenticate('local')(req,res,()=>{
        res.redirect('/home')
      });
    }
  });
});







//post method for our login
app.post('/',(req,res)=>{

  const user = new User ({
    email : req.body.email,
    password : req.body.password    
  });

  req.login( user,(err)=>{
    if(err){
      console.log(err);
    }else{
      passport.authenticate('local')(req,res,()=>{
        res.redirect('/home')
      });
    }
  }
);
});

//our home route
app.get('/home',(req,res)=>{
  
  if(req.isAuthenticated()){
    res.redirect('/home');
    Post.find((err,posts)=>{
      if(err){
        console.log(err);
      }else{
        res.json(posts)
      }
    });
  }else{
    res.redirect('/')
  }
});

app.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});


app.post('/new-post',(req,res)=>{

  const newPost = new Post({
    userId : req.user.id,
    post : req.body.post,
    like : 0
  });

  newPost.save((err)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/home');
    }
  })

});

app.listen(5000 ,function(){
    console.log("server is up and running on port 5000");
});








