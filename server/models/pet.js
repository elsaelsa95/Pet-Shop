"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      Pet.hasOne(models.Booking, {
        foreignKey: "PetId",
      });
    }
  }
  Pet.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "UserId is required" },
          notNull: { msg: "UserId is required" },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name is required" },
          notNull: { msg: "Name is required" },
        },
      },
      bod: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Date is required" },
          notNull: { msg: "Date is required" },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Category is required" },
          notNull: { msg: "Category is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Pet",
    }
  );
  return Pet;
};
