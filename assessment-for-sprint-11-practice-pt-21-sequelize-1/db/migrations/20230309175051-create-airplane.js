'use strict';

const { airlineCode } = require("../../test/data/airplane-values");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airlineCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      flightNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      inService: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      maxNumPassengers: {
        allowNull: false,
        type: Sequelize.INTEGER,

      },
      currentNumPassengers: {
        type: Sequelize.INTEGER
      },
      firstFlightDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
    await queryInterface.addIndex('Airplanes',
     {fields: ['airlineCode', 'flightNumber'], 
      unique: true
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
    await queryInterface.removeIndex("Airplanes", ['airlineCode', 'flightNumber'])
  }
};
