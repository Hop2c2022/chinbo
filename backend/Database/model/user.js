const mongoose = require(`mongoose`);

const User = new mongoose.Schema({
  name: { type: String, required: true },
  password: {
    type: String,
    required: true,
    minlength: [1, "firstname at least 8shte bororo"],
    maxlength: [61, "firstname 20oos baga"],
  },
  email: { type: String, required: true },
  // admin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});
const UserModel = mongoose.model("User", User);
module.exports = UserModel;
