var express=require("express");
var path=require("path");
var http=require("http");
var app=express();

// app.use(express.static,path.join(__dirname,'public'));

// app.get("/",function(req,res){
//     res.sendFile(path.join(__dirname,'/index.html'));


// })
app.get("/",function(req,resp){
  resp.send("hello world")
})
app.listen(6000,function(){
    console.log("running on port 6000");
})