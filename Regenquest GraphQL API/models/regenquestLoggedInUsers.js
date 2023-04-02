const { model, Schema } = require("mongoose");

//id of the logged in user
//session token of the logged in user
const regenquestLoggedInUsersSchema = new Schema({
  userID: String,
  sessionToken: String,
});

module.exports = model(
  "regenquestLoggedInUsers",
  regenquestLoggedInUsersSchema
);
