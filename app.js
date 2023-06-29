//import library
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require("./router/routers.js");

//add middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//add the URL handler
app.use("/",router);

//start the server
app.listen(3002,function(){
    console.log("server is started at port no : 3002");
});

//export the app
module.exports=app;