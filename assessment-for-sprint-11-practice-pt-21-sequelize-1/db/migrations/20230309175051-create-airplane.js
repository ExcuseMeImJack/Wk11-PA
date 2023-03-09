'use strict';
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
        unique: true,
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};
