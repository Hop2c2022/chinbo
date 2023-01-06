const mongoose = require("mongoose");
const connectionString = `mongodb+srv://Chinbo:Chinbo09@cluster0.w5mtv.mongodb.net/user`;
exports.connectDatabase = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log(`Successfully Hostod`);
    return `Mongoose connected`;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
