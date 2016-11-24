var randomColors = require('randomcolor')

module.exports = function (app){
  // on a GET request
  app.get('/getColors', function(req, res, next){
    console.log("Received GET at /getColors");

    var colors = randomColors({
      count:8
    })

    res.status(200).send(colors)
  })

   app.get('*', function(req, res, next){
    res.status(404).sendFile(__dirname + '/page404.html' )
  })



}