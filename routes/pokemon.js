const express = require('express')
const pokemonController = require('../controllers/pokemonController')

const router = express.Router()



router.get('/', pokemonController.getAllPokemons)
router.post('/add', pokemonController.addPokemon)

module.exports = router;



