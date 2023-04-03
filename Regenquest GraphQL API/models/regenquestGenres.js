const { model, Schema } = require("mongoose");

//list of availible genres
const regenquestGenresSchema = new Schema({
  genre: [String],
});

module.exports = model("regenquestGenres", regenquestGenresSchema);
