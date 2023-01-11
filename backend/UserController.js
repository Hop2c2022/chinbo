const User = require("./Database/model/user");
const mongoose = require("mongoose");
const { TokenGenerator } = require("./helper/helper");

exports.userGetController = async (req, res) => {
  const result = await User.find();
  res.send({ data: result });
};
exports.usersPostController = async (req, res) => {
  try {
    const { username, password, gender, email } = req.body;
    const result = await new User({
      username: username,
      password: password,
      email: email,
    }).save();
    res.status(201).send(result);
  } catch (err) {
    res.send(err.message);
  }
};
exports.usersDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const objId = new mongoose.Types.ObjectId(id);
    const result = await User.findByIdAndDelete({ _id: objId }, { new: true });
    res.send(`Success, ${result.username} deleted)`);
  } catch (err) {
    res.send(err.message);
  }
};
exports.usersUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { change, value } = req.body;
    await User.findByIdAndUpdate({ _id: id }, { [change]: value });
    res.send(`Successfully edited  ${change} to ${value}`);
  } catch (err) {
    res.send(err.message);
  }
};
exports.getuserbyemail = async (req, res) => {
  const { email } = req.params;
  const result = await User.findOne({ email: email });
  res.send(result);
};

exports.userLogin = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) res.send(" You don't have any user account, please sign up ");

  if (user.password === password && user.email === email) {
    const token = await TokenGenerator({ uid: user._id, expires: 1200 });
    res.send({ token: token });
    return;
  } else {
    res.send("Invalid password or email");
    return;
  }
};
