const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(async () => {
    // Run your code here, after you have insured that the connection was made

    // iteration 2
    // const myRecipe = await Recipe.create(data[0]);
    //  console.log(myRecipe);

    //iteration 3
    const recipes = await Recipe.insertMany(data);
    console.log("INSERT OF ALL RECIPES DONE");
    //iteration 4
    const updateRecipe = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 }
    );
    console.log("UPDATE DONE");
    //iteration 5
    const delElem = await Recipe.deleteOne({ title: "Carrot Cake" });
    console.log(delElem);

    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
