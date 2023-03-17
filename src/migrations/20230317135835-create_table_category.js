'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(250),
        allowNull: false
      },

      createdAt: Sequelize.DATE,

      updatedAt: Sequelize.DATE

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('categories');

  }
};