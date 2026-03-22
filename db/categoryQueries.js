

const {use} = require("express/lib/application");
const pool = require("./pool")



async function getAllTypes(){
    return await pool.query("Select * from type")
}

async function getPokemonsFromTypes(type ){
    return await  pool.query(`Select pokemon.name, pokemon.image 
        from pokemon_type Join pokemon on pokemon.id=pokemon_type.pokemon_id
        Join type on type.id = pokemon_type.type_id where type.id = $1`, [type])
}




module.exports = {
    getAllTypes,
    getPokemonsFromTypes
}



























