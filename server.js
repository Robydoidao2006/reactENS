//requiring packages
const express= require ("express");
const bodyParser = require ("body-parser");
//requiring DB
const mongoose = require("mongoose");
//requiring routes
const routes = require("./routes");

//ruuning app with express
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 30001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
//changing code to json format
app.use(bodyParser.json());
//displaying static
app.use(express.static("client/build"));
//add routes
app.use(routes);

// connect to Mango DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ENS");

//app listening to the server.
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
