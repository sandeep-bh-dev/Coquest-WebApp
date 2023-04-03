const { model, Schema } = require("mongoose");

//communityID: unique id of the community
//name: name of the community
//description: of the community
//members: list of userID of people in the community
//theme: theme of the community
//image: image for the community
const regenquestCommunitySchema = new Schema({
  communityID: { type: String, unique: true },
  name: String,
  description: String,
  members: [String],
  location: String,
  image: { contentType: String, path: String, img: String },
});

module.exports = model("regenquestCommunity", regenquestCommunitySchema);
