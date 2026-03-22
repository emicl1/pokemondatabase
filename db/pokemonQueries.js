


const {use} = require("express/lib/application");
const pool = require("./pool")



async function getAllPokemons(){
    return await pool.query("Select * from pokemon")
}

async function getPokemon(name){
    return await pool.query("Select * from pokemon where name = ($1)", [name])
}


async function addPokemon(name, id){
    return await pool.query("INSERT INTO pokemon (name, image, trainer_id) VALUES ($1,   $2,  1)", [name, id])
}



module.exports = {
    getAllPokemons,
    getPokemon,
    addPokemon
}














