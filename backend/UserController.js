const User = require("./Database/model/user");
const mongoose = require("mongoose");
const { TokenGenerator } = require("./helper/helper");
const bcrypt = require("bcrypt");

exports.userGetController = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  try {
    const result = await User.find()
      .skip((page - 1) * limit)
      .limit(10);
    res.send({ data: result });
  } catch (error) {
    res.send(error.message);
  }
};
exports.usersPostController = async (req, res) => {
  try {
    const { password, email, name } = req.body;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const result = await new User({
      name: name,
      password: hash,
      email: email,
    }).save();
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err.message);
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

exports.userLogin = async (req, res) => {
  const { password, email } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email: email });
  if (!user) res.send(" You don't have any user account, please sign up ");
  const check = await bcrypt.compare(password, user.password);

  if (check === true) {
    const token = await TokenGenerator({ uid: user._id, expires: "1d" });
    res.send({ token: token });
    return;
  } else {
    res.send("Invalid password or email");
    return;
  }
};
