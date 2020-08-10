const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findUser: function(req, res) {
    //console.log(req);
    db.User
      .find({email: req.query.email})
      .then(dbUser => {
        res.json(dbUser);
        console.log(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    //console.log(req);
    db.User
      .create(req.body)
      .then(dbUser => {
        res.json(dbUser);
        console.log(dbUser);
      })
      .catch(err => res.status(422).json(err));
  }
};