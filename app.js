const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.get("/", function(req, res){
  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0  ){

res.send("this is a weekend");
  }else{
    //   res.write()
    // res.send()
      res.sendFile(__dirname + "/index.html")
  }
});

app.listen(3000, function(){
    console.log("Server started at port 3000")
});