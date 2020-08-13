const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var passport = require('./config/passport');
var session = require("express-session");

const PORT = process.env.PORT || 3001;
//console.log(PORT);
const app = express();
const routes = require("./routes");

// Middleware defined
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to MongoDB database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user1:password1@ds127982.mlab.com:27982/heroku_qll7blcl",
  { useCreateIndex: true,useUnifiedTopology: true, useNewUrlParser: true }
);
// Server listens on PORT 3001
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
