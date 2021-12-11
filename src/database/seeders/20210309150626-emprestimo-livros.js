'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('emprestimo_livros', [{
      id: 1,
      livro_id: 1,
      emprestimo_id: 1,
      created_at: '2020-03-29 19:01:21.220',
      updated_at: '2020-03-29 19:01:21.220'
    }, {
      id: 2,
      livro_id: 2,
      emprestimo_id: 2,
      created_at: '2020-03-29 19:04:32.125',
      updated_at: '2020-03-29 19:04:32.125'
    }, {
      id: 3,
      livro_id: 5,
      emprestimo_id: 3,
      created_at: '2020-03-29 19:05.12.412',
      updated_at: '2020-03-29 19:05.12.412'
    }, {
      id: 4,
      livro_id: 6,
      emprestimo_id: 4,
      created_at: '2020-03-29 19:06.55.015',
      updated_at: '2020-03-29 19:06.55.015'
    }, {
      id: 5,
      livro_id: 4,
      emprestimo_id: 5,
      created_at: '2020-03-29 19:07:25.001',
      updated_at: '2020-03-29 19:07:25.001'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('emprestimo_livros', null, {})
  }
}
