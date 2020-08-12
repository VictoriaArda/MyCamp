const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// hostSchema defined
const hostSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        required: true
    }
});

// Create Host model with hostSchema
const Host = mongoose.model("Host", hostSchema);

module.exports = Host;