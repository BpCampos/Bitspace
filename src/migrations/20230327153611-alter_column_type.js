'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.changeColumn('clients', 'cpf', {
      type: Sequelize.STRING(250),
      allowNull: false
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.changeColumn('clients', 'cpf');

  }
}
