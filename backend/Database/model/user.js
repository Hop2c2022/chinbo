const mongoose = require(`mongoose`);

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [8, "firstname at least 8shte bororo"],
    maxlength: [20, "firstname 20oos baga"],
  },
  password: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});
const UserModel = mongoose.model("User", User);
module.exports = UserModel;
