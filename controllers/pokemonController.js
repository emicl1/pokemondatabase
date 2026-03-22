

const db = require("../db/pokemonQueries")


const getAllPokemons = async (req, res) => {
    let pokemons = await db.getAllPokemons()
    res.render("pokemon", {pokemons : pokemons.rows})
}


const addPokemon = async (req,res)=>{
    console.log(req.body.name)
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + req.body.name)
    if (!response.ok) {
        return res.render("pokemon", { error: "Pokemon not found" })
    }
    const data = await response.json();
    await db.addPokemon(req.body.name, data.id)

    res.redirect("/pokemon")
}




module.exports = {
    getAllPokemons,
    addPokemon
}












