// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var DataSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Number
  },
  url: {
    type: String
  }
});

// Create the Model
var Data = mongoose.model("Data", DataSchema);

// Export it for use elsewhere
module.exports = Click;
