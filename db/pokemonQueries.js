


const {use} = require("express/lib/application");
const pool = require("./pool")



async function getAllPokemons(){
    return await pool.query("Select * from pokemon")
}

async function getPokemon(name){
    return await pool.query("Select * from pokemon where name = ($1)", [name])
}





module.exports = {
    getAllPokemons,
    getPokemon
}














