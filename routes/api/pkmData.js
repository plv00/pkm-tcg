const express = require("express");
const router = express.Router();

const pokemon = require("pokemontcgsdk");

// @route   GET api/pkmData/test
// @desc    Tests pkmData route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Pokemon Data Works" }));

// @route   GET api/pkmData/test
// @desc    Tests pkmData route
// @access  Public
router.get("/pokemonData", (req, res) => {
  // res.json({ msg: "pokemon  work"})
  pokemon.card.find("base1-4").then(result => {
    res.json({ msg: result.card.name });
    console.log(result.card.name); // "Charizard"
  });
});

// pokemon.card.find("base1-4").then(result => {
//   console.log(result.card.name); // "Charizard"
// });

module.exports = router;
