
const db = require("../db/categoryQueries")


const getAllCategories = async (req, res) => {
    const {rows} = await db.getAllTypes()
    res.render("categories", {categories : rows})
}


const getPokemosOfType = async (req, res) => {
    let pokemons = await db.getPokemonsFromTypes(req.params.id)
    console.log(pokemons)
    res.render("category", {pokemons : pokemons.rows})
}



module.exports = {
    getAllCategories,
    getPokemosOfType
}



