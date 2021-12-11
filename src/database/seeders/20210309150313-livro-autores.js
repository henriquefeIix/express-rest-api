'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('livro_autores', [{
      id: 1,
      livro_id: 1,
      autor_id: 1,
      created_at: '2020-03-29 19:27:52.329',
      updated_at: '2020-03-29 19:27:52.329'
    }, {
      id: 2,
      livro_id: 1,
      autor_id: 2,
      created_at: '2020-03-29 19:28:31.252',
      updated_at: '2020-03-29 19:28:31.252'
    }, {
      id: 3,
      livro_id: 1,
      autor_id: 3,
      created_at: '2020-03-29 19:29:18.320',
      updated_at: '2020-03-29 19:29:18.320'
    }, {
      id: 4,
      livro_id: 2,
      autor_id: 4,
      created_at: '2020-03-29 19:30:37.115',
      updated_at: '2020-03-29 19:30:37.115'
    }, {
      id: 5,
      livro_id: 2,
      autor_id: 5,
      created_at: '2020-03-29 19:31:48.214',
      updated_at: '2020-03-29 19:31:48.214'
    }, {
      id: 6,
      livro_id: 3,
      autor_id: 6,
      created_at: '2020-03-29 19:32:22.125',
      updated_at: '2020-03-29 19:32:22.125'
    }, {
      id: 7,
      livro_id: 3,
      autor_id: 7,
      created_at: '2020-03-29 19:33:42.142',
      updated_at: '2020-03-29 19:33:42.142'
    }, {
      id: 8,
      livro_id: 4,
      autor_id: 8,
      created_at: '2020-03-29 19:34:12.324',
      updated_at: '2020-03-29 19:34:12.324'
    }, {
      id: 9,
      livro_id: 5,
      autor_id: 9,
      created_at: '2020-03-29 19:35:18.211',
      updated_at: '2020-03-29 19:35:18.211'
    }, {
      id: 10,
      livro_id: 6,
      autor_id: 10,
      created_at: '2020-03-29 19:36:31.351',
      updated_at: '2020-03-29 19:36:31.351'
    }, {
      id: 11,
      livro_id: 7,
      autor_id: 11,
      created_at: '2020-03-29 19:37:14.167',
      updated_at: '2020-03-29 19:37:14.167'
    }, {
      id: 12,
      livro_id: 7,
      autor_id: 12,
      created_at: '2020-03-29 19:38:25.412',
      updated_at: '2020-03-29 19:38:25.412'
    }, {
      id: 13,
      livro_id: 8,
      autor_id: 13,
      created_at: '2020-03-29 19:39:31.458',
      updated_at: '2020-03-29 19:39:31.458'
    }, {
      id: 14,
      livro_id: 8,
      autor_id: 14,
      created_at: '2020-03-29 19:40:12.119',
      updated_at: '2020-03-29 19:40:12.119'
    }, {
      id: 15,
      livro_id: 8,
      autor_id: 15,
      created_at: '2020-03-29 19:41:33.223',
      updated_at: '2020-03-29 19:41:33.223'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('livro_autores', null, {})
  }
}
