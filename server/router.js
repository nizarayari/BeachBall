

module.exports = function (app){
  // on a GET request
  app.get('*', function(req, res, next){
    res.status(404).sendFile(__dirname + '/page404.html' )
  })

  //other request



}