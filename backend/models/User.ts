// Import Mongoose
// const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },

});


const User = mongoose.model("User",userSchema);

module.exports = User;