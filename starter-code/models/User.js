const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  provider_name: String,
  provider_id: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
