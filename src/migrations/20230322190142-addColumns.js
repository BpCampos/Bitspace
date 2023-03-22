'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.addColumn('clients', 'number', {
        type: Sequelize.STRING,
        allowNull: false,
        after: 'cep'
      });
      await queryInterface.addColumn('clients', 'street', {
        type: Sequelize.STRING,
        allowNull: false,
        after: 'cep'
      });
    } catch (e) {
      console.log(e)
    }

  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.removeColumn('clients', 'number');
      await queryInterface.removeColumn('clients', 'street');
    } catch (e) {
      console.log(e)
    }
  }
}