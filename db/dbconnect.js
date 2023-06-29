var mysql=require("mysql");

// create the connection
const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"root123",
    "port":3306,
    "database":"test"
});

//setting the connection
mysqlconnection.connect(function(error){
if(error){
    console.log("error is occured: "+error);
}
else{
    console.log("connection is set-up");
}
});

//export the mysqlconnection
module.exports=mysqlconnection;