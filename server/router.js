var randomColors = require('randomcolor')

module.exports = function (app){

  app.get('/getColors', function(req, res, next){
    console.log("Received GET at /getColors");
    var colors = randomColors({
      count:8
    })

    var randomwait = Math.floor(Math.random()*26) + 5

    setTimeout(function(){
      res.status(200).send(colors)
    },1000*randomwait)
  })

  app.get('*', function(req, res, next){
    res.status(404).sendFile(__dirname + '/page404.html' )
  })



}