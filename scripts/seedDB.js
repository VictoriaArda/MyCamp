const mongoose = require("mongoose");
const db = require("../models");

// Connect to mongoDB database
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mycamp_db"
);

// Array containing seed object with properties
const userSeed = [
    {
        firstname: "John",
        lastname: "Doe",
        email: "johndoe@gmail.com",
        password: "Password1"
    },
    {
        firstname: "Jane",
        lastname: "Doe",
        email: "janedoe@gmail.com",
        password: "Password2"
    }
];

// Removes all documents from User collection to enable insert of seed(s) 

db.User.remove({})
.then(function() {
    return db.User.collection.insertMany(userSeed);
})
.then(function(data) {
    console.log(data.result.n, " total records inserted.");
    // Terminate when no async operations are pending
    process.exit(0);
})
.catch(function(err) {
    console.error(err);
    //  Exits with a failure code
    process.exit(1);
});

