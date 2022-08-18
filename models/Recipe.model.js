const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: { type: Schema.Types.String, required: true, unique: true },
  level: {
    type: Schema.Types.String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: [Schema.Types.String],
  cuisine: Schema.Types.String,
  dishType: {
    type: Schema.Types.String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
  image: {
    type: Schema.Types.String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: { type: Schema.Types.Number, min: 0 },
  creator: Schema.Types.String,
  date: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
