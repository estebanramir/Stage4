const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var Rank= require('./rank');
let events = require("events");
var mongoose = require('mongoose');
var port =8080;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/myapp',  {useNewUrlParser: true, useUnifiedTopology: true});
let event_emitter = new events.EventEmitter();


app.post('/rank', async (req, res) => {
  event_emitter.emit("some_event",req);
  res.status(200).send("ok");
});

app.listen(port, () => {
 console.log("El servidor está inicializado en el puerto 8080");
});

event_emitter.on("some_event", function(req) {
  try{
    var rank = new Rank({
    name: req.body.name,
    movie: req.body.movie,
    rating: req.body.rating})    
    rank.save((err, rankStored)=>{
    if(err) {
      console.log(err);
      event_emitter.emit("fail_event",req);
    }
    //else console.log(".");
  })
  }catch(err){
    console.log(err);
  }
});

event_emitter.on("fail_event", function(req) {
  event_emitter.emit("some_event",req);
  console.log("fail");
  console.log(req);
});