const { model, Schema } = require("mongoose");

//userID: a unique ID generated during registeration, used to connect user data to the user
//name: name of the user
//username: username of the user
//email: email of the user
//passwordHash: password hash of the user
//location: location of the user
//image: image of the user
//motive: the motive of the user for joining regenquest, user will pick from a list (volunteer, creating project, ...)
//biography: a biograph of the user
//topics: a list of topics (Strings) that the user is interested in.
//communities: the list of communities that the user has joined.
//skills: A list of skills that the user has, along with the skill level, (Basic, intermediate, Advanced)
//Badges: A list of all the badges the user has earned
//currentLevel: placeholder for user level, will be later calculated
//recommendations: recomendationg given by other people
const regenquestUserSchema = new Schema({
  userID: { type: String, unique: true },
  name: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  location: String,
  image: String,
  motive: String,
  biography: String,
  topics: [String],
  communities: [String],
  skills: [{ skillName: String, skillLevel: String }],
  badges: [{ badgeName: String, badgeDescription: String }],
  currentLevel: Number,
  recommendations: [{ name: String, comment: String }],
});

module.exports = model("regenquestUser", regenquestUserSchema);
