"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StudentsTable = queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      studentName: {
        type: Sequelize.STRING,
      },
      className: {
        type: Sequelize.STRING,
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
    return StudentsTable;
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Students");
  },
};
