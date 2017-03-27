var express=require('express');
var bodyParser=require('body-parser');
var app=express();

var urlencodeParser=bodyParser.urlencoded({extended:false});
// template engine
app.set('view engine','ejs');

// middleware and static files
app.use('/',express.static('static'));

app.get('/',function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  res.render('contact',{'qs':req.query});
});


// post request
app.post('/contact',urlencodeParser,function(req,res){
  console.log(req.body);
});

app.get('/profile/:name',function(req,res){
  var data={age:24,job:'coding',hobbies:['eating','reading','coding']};
  res.render('profile',{person : req.params.name,data:data});
});


app.listen(3000);
