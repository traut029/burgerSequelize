//Outside dependencies
var express=require("express");
var bodyParser=require("body-parser")
var exphbs = require("express-handlebars");

//Set port to work locally and with heroku
var PORT = process.env.PORT || 8080;

var app = express();

//Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory 
app.use(express.static("public"));

//Use handlebars with a layout file of "main"
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
var routes = require("./controllers/burgers_controller.js");

//Run routes
app.use(routes);

//Start server
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
  