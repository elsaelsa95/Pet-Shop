"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      Booking.belongsTo(models.Pet, {
        foreignKey: "PetId",
      });
      Booking.belongsTo(models.Service, {
        foreignKey: "ServiceId",
      });
    }
  }
  Booking.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "UserId is required" },
          notNull: { msg: "UserId is required" },
        },
      },
      PetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "PetId is required" },
          notNull: { msg: "PetId is required" },
        },
      },
      ServiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "ServiceId is required" },
          notNull: { msg: "ServiceId is required" },
        },
      },
      dateAndTime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Date and Time is required" },
          notNull: { msg: "Date and Time is required" },
        },
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Date and Time is required" },
          notNull: { msg: "Date and Time is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
