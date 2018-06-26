const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const pokemon = require("pokemontcgsdk");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// heroku or localhost
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

pokemon.card.find("base1-4").then(result => {
  console.log(result.card.name); // "Charizard"
});

pokemon.card.where({ supertype: "pokemon", subtype: "mega" }).then(cards => {
  console.log(cards[0].name); // "M Sceptile-EX"
});

pokemon.card.all({ name: "blastoise", pageSize: 1 }).on("data", card => {
  console.log(card.name);
});
