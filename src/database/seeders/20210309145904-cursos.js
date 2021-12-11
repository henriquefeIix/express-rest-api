'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cursos', [{
      id: 1,
      descricao: 'Redes de Computadores',
      created_at: '2020-03-29 18:21:49.345',
      updated_at: '2020-03-29 18:21:49.345'
    }, {
      id: 2,
      descricao: 'Design de Interiores',
      created_at: '2020-03-29 18:23:12.353',
      updated_at: '2020-03-29 18:23:12.353'
    }, {
      id: 3,
      descricao: 'Administração',
      created_at: '2020-03-29 18:24:35.342',
      updated_at: '2020-03-29 18:24:35.342'
    }, {
      id: 4,
      descricao: 'Engenharia Elétrica',
      created_at: '2020-03-29 18:25:45.214',
      updated_at: '2020-03-29 18:25:45.214'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cursos', null, {})
  }
}
