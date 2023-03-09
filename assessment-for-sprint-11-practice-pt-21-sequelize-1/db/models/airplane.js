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
        validate: {
          foo(value) {
            let res = value.toUpperCase()
            if(value.length !== 2 || value !== res){
              throw new Error("wrong airlineCode")
            }
          }
        }
      },
      flightNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        validate: {
          len:[1,4],
          isNumeric: true
        }
      },
      inService: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      maxNumPassengers: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          min: 1
        }
      },
      currentNumPassengers: {
        type: DataTypes.INTEGER,
        validate: {
          // [Op.lte]: this.maxNumPassengers,
          maxNumPassCheck(value){
            if(value > this.maxNumPassengers) {
              throw new Error("Too many passengers")
            }
          },
          min: 0,
          numPassChecker(value){
            if(value !== null && this.inService === false){
              throw new Error('flight must be in service');
            }
          }
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
