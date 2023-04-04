const { model, Schema } = require("mongoose");

//messageID: unique id of the message
//chatID: id of the chat the message belongs to
//sentFrom: id of the user that sent this message
//message: content of the message
//time: time this message was sent
//unreadBy: list of users from chat that have not read the message
const regenquestMessageSchema = new Schema({
  messageID: { type: String, unique: true },
  chatID: String,
  sentFrom: String,
  message: String,
  time: String,
  unreadBy: [String],
});

module.exports = model("regenquestMessage", regenquestMessageSchema);
