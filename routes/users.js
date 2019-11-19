var express =require("express");
var app =express();


app.get("/alumni",function(req,res){

res.sendFile(__dirname+"/alumni.html")
})
module.exports=app;