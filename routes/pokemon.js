const express = require('express')
const pokemonController = require('../controllers/pokemonController')

const router = express.Router()



router.get('/', pokemonController.getAllPokemons)


module.exports = router;



