// Import Mongoose
// const mongoose = require("mongoose");

// Schema ConstructletSchema } = mongoose;

const bugSchema = new Schema({
  name: { type: String, required: true, },
  priority: { type: String, required: true, },
  details: { type: String, required: true },
  // user: {
  //   type: Schema.Types.ObjectID,
  //   ref: "User",
  // },
});



// Model
// Bug = mongoose.model("Bug", bugSchema);

module.exports = Bug;