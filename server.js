const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware defined
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to MongoDB database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mycamp_db",
  { useCreateIndex: true,useUnifiedTopology: true, useNewUrlParser: true }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
