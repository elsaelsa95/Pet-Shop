"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
      },
      PetId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Pets",
          },
          key: "id",
        },
      },
      ServiceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Services",
          },
          key: "id",
        },
      },
      dateAndTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      note: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bookings");
  },
};
