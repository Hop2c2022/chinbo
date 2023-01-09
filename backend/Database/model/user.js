const mongoose = require(`mongoose`);

const User = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    minlength: [8, "firstname at least 8shte bororo"],
    maxlength: [20, "firstname 20oos baga"],
  },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});
const UserModel = mongoose.model("User", User);
module.exports = UserModel;
