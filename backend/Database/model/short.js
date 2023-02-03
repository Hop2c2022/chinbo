const mongoose = require(`mongoose`);

const Short = new mongoose.Schema({
  full: { type: String, required: true },
  short: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});
const ShortModel = mongoose.model("Short", Short);
module.exports = ShortModel;
