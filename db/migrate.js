#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();


const SQL = `
    CREATE TABLE IF NOT EXISTS trainer
    (
        id       INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS type
    (
        id       INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS pokemon
    (
        id       INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(255),
        image varchar(255),
        trainer_id integer,
        CONSTRAINT fk_trainer foreign key (trainer_id) references trainer(id)
    );

    CREATE TABLE IF NOT EXISTS pokemon_type
    (
        pokemon_id INTEGER,
        type_id    INTEGER,
        CONSTRAINT fk_pokemon FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
        CONSTRAINT fk_type    FOREIGN KEY (type_id)    REFERENCES type(id)
    );

    INSERT INTO trainer (name) VALUES
                                   ('Ash'),
                                   ('Misty'),
                                   ('Brock');

    INSERT INTO type (name) VALUES
                                ('Fire'),
                                ('Water'),
                                ('Electric'),
                                ('Rock'),
                                ('Grass'),
                                ('Flying');

    INSERT INTO pokemon (name, image, trainer_id) VALUES
                                                      ('Pikachu',   '25',  1),
                                                      ('Charizard', '6',   1),
                                                      ('Squirtle',  '7',   2),
                                                      ('Starmie',   '121', 2),
                                                      ('Geodude',   '74',  3),
                                                      ('Onix',      '95',  3);

    INSERT INTO pokemon_type (pokemon_id, type_id) VALUES
                                                       (1, 3),  -- Pikachu → Electric
                                                       (2, 1),  -- Charizard → Fire
                                                       (2, 6),  -- Charizard → Flying
                                                       (3, 2),  -- Squirtle → Water
                                                       (4, 2),  -- Starmie → Water
                                                       (5, 4),  -- Geodude → Rock
                                                       (6, 4);  -- Onix → Rock

`



    async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://" + process.env.DB_USER + ":" +process.env.DB_PASSWORD +"@localhost:5432/" + process.env.DB_NAME,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
