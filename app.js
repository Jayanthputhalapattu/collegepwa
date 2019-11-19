var express=require("express");
var app=express();
app.use(express.static('static'))


var users = require("./routes/users.js")
app.get("/",function(req,res){
res.sendFile(__dirname+"/static/dashboard.html")

})

app.use("/users",users)
app.listen(3000,function(){
	
})