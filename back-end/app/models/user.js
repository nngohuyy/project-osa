const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  avatar: { type: String, default: "/default-avatar.png" },
  role: {
    type: String,
    enum: ["president", "vice_president", "leader", "member", "supervisor"],
    default: "member"
  },
  created_at: { type: Date, default: Date.now },
})

var User = new mongoose.model("User", UserSchema);
module.exports = User;
