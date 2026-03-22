

const db = require("../db/pokemonQueries")


const getAllPokemons = async (req, res) => {
    let pokemons = await db.getAllPokemons()
    console.log(pokemons)
    res.render("pokemon", {pokemons : pokemons.rows})
}





module.exports = {
    getAllPokemons
}












