const passport = require('passport');
const db = require("../../models");
const router = require("express").Router();

// Login route user authentication using local strategy
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err,user,info){
    if(err){
      console.log(err);
    }
  }) (req,res,next);
  console.log(req);
  res.json('you did it');

  //add redirect here
});

// Register post route 
router.post('/register', function(req, res) {
  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  })
  .then(function() {
    res.redirect(307, '/api/login');
  })
  .catch(function(err) {
    res.status(401);
  })

});

// Hosts post route
router.post('/hosts', function(req, res){
  db.Host.create(req.body)
  .then(function(dbHost) {
    res.json(dbHost);
    console.log(dbHost);
  })
  .catch(function(err) {
    res.status(422),json(err);
  })

});

// Hosts get route
router.get('/hosts', function(req, res){
  db.Host.find(req.query)
  .then(function(dbHost) {
    res.json(dbHost);
    console.log(dbHost);
  })
  .catch(function(err) {
    res.status(422).json(err);
  });
});

module.exports = router;