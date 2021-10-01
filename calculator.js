const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/BmiCalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/BmiCalculator",function(req,res){
  var wt = Number(req.body.weight);
  var ht = Number(req.body.hieght);
  var bmi = (wt*wt)/ht;
  var bmir = Math.round(parseFloat((bmi*Math.pow(10,2)).toFixed(2)))/Math.pow(10,2);
  res.send("To apka BMI h "+bmir);
});
app.post("/",function(req,res){
  var a = Number(req.body.a);
  var b = Number(req.body.b);
  res.send("Thank you jii aur jwab h "+(a+b));

});
app.get("/date",function(req,res){
  var d = new Date();
  console.log(d);
  d.setDate(d.getDate()+17);
  console.log(d);
});

app.listen("3000",function(){
  console.log("server 3000 started");
});
