'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [
              {
                name: 'John Doe',
                email: 'jsreyes@misena.edu.co',
                password: '1234'

              },
              {
                name: 'John Pablo',
                email: 'juanPaBlO@misena.edu.co',
                password: '4321'
              }
    ], 
    {});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
