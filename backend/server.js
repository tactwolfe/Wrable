const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get('/' , function(req,res){
    res.sendFile(__dirname+"/index.html");
});




app.listen(5000 ,function(){
    console.log("server is up and running on port 5000");
});








