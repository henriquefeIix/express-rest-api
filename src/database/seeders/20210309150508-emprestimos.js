'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('emprestimos', [{
      id: 1,
      data_retirada: '2020-03-29 19:01:21.220',
      previsao_devolucao: '2020-04-09 00:00:00.000',
      aluno_id: 1,
      created_at: '2020-03-29 19:01:21.220',
      updated_at: '2020-03-29 19:01:21.220'
    }, {
      id: 2,
      data_retirada: '2020-03-29 19:04:32.125',
      previsao_devolucao: '2020-04-09 00:00:00.000',
      aluno_id: 2,
      created_at: '2020-03-29 19:04:32.125',
      updated_at: '2020-03-29 19:04:32.125'
    }, {
      id: 3,
      data_retirada: '2020-03-29 19:05.12.412',
      previsao_devolucao: '2020-04-09 00:00:00.000',
      aluno_id: 3,
      created_at: '2020-03-29 19:05.12.412',
      updated_at: '2020-03-29 19:05.12.412'
    }, {
      id: 4,
      data_retirada: '2020-03-29 19:06.55.015',
      previsao_devolucao: '2020-04-09 00:00:00.000',
      aluno_id: 3,
      created_at: '2020-03-29 19:06.55.015',
      updated_at: '2020-03-29 19:06.55.015'
    }, {
      id: 5,
      data_retirada: '2020-03-29 19:07:25.001',
      previsao_devolucao: '2020-04-09 00:00:00.000',
      aluno_id: 2,
      created_at: '2020-03-29 19:07:25.001',
      updated_at: '2020-03-29 19:07:25.001'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('emprestimos', null, {})
  }
}
