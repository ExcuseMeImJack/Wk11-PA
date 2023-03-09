"use strict";
const { Model } = require("sequelize");
const { Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init(
    {
      airlineCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      flightNumber: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      inService: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      maxNumPassengers: {
        type: DataTypes.INTEGER,
        // validate: {
        //   min: .
        // }
      },
      currentNumPassengers: {
        type: DataTypes.INTEGER,
        validate: {
          [Op.lte]: this.maxNumPassengers
        }
      },
      firstFlightDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  );
  return Airplane;
};
