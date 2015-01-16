module.exports = function (app) { 

    app.get('/', function(req, res){
	  var body = 'Hello World : o';
	  res.setHeader('Content-Type', 'text/plain');
	  res.setHeader('Content-Length', body.length);
	  res.end(body);
	});

    app.get("/about", function(request, response) {
  		response.send("Welcome to the about page!");
	});

	app.get("/IKDDhw10-1", function(request, response) {
  		response.sendfile('./views/IKDDhw10-1.html');
  	});

  	app.get("/IKDDhw10-2", function(request, response) {
  		response.sendfile('./views/IKDDhw10-2.html');
  	});


};

