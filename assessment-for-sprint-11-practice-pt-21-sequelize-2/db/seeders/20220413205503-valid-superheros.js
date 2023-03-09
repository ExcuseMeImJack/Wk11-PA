"use strict";

const { Superhero } = require("../models");

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
  {
    name: "PETER PARKER",
    alias: "Spiderman",
    affiliation: "Avengers",
    heightCm: 178,
    isMutant: false,
    race: "spiderboy",
    universe: "Marvel",
    releaseYear: 1962,
  },
  {
    name: "BRUCE WAYNE",
    alias: "Batman",
    affiliation: "Justice League",
    heightCm: 188,
    isMutant: false,
    race: "batboy",
    universe: "DC",
    releaseYear: 1939,
  },
  {
    name: "LOGAN",
    alias: "Wolverine",
    affiliation: "X-Men",
    heightCm: 160,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 1974,
  },
  {
    name: "STEPHAN STRANGE",
    alias: "Dr. Strange",
    affiliation: "Avengers",
    heightCm: 188,
    isMutant: false,
    race: "magicboy",
    universe: "Marvel",
    releaseYear: 1963,
  },
  {
    name: "CLARK KENT",
    alias: "Superman",
    affiliation: "Justice League",
    heightCm: 191,
    isMutant: false,
    race: "strongboy",
    universe: "DC",
    releaseYear: 1938,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo,
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
