'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('admin', 'isAdmin', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      after: 'password'

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('admin', 'isAdmin');

  }
}
