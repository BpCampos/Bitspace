'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categories =[{
      id:1,
      name: "Computador",
      createdAt: (new Date()).toJSON().substring(0, 19),
      updatedAt: (new Date()).toJSON().substring(0, 19)
    },
    {
      id:2,
      name: "Periféricos",
      createdAt: (new Date()).toJSON().substring(0, 19),
      updatedAt: (new Date()).toJSON().substring(0, 19)
    },
    {
      id:3,
      name: "Cadeiras",
      createdAt: (new Date()).toJSON().substring(0, 19),
      updatedAt: (new Date()).toJSON().substring(0, 19)
    },
    {
      id:4,
      name: "Componentes",
      createdAt: (new Date()).toJSON().substring(0, 19),
      updatedAt: (new Date()).toJSON().substring(0, 19)
    }
  ]



   await queryInterface.bulkInsert('categories', categories, {});
   
  },

  async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('categories', null, {});
    
  }
};
