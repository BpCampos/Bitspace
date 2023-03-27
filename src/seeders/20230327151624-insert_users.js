'use strict';

const users = require('../database/users')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('clients', users, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('clients', null, {});

  }
};
