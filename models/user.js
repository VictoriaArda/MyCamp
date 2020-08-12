const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// userSchema defined
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// This user password hashed
userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
        return next(err); }
      user.password = hash;
      next();
    })
});

// Create userSchema function to compare password and hashed password during authentication
userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// Create User model with userSchema
const User = mongoose.model("User", userSchema);

module.exports = User;