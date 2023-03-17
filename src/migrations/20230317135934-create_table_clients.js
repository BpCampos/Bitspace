'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      surname: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      cpf: {
        type: Sequelize.INTEGER(14),
        allowNull: false
      },
      rg: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      cep: {
        type: Sequelize.INTEGER(50),
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      neighborhood: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      uf: {
        type: Sequelize.STRING(5),
        allowNull: false
      },

      createdAt: Sequelize.DATE,

      updatedAt: Sequelize.DATE
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('clients');

  }
};

