'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('autores', [{
      id: 1,
      nome: 'Patrick Debois',
      created_at: '2020-03-29 19:14:52.332',
      updated_at: '2020-03-29 19:14:52.332'
    }, {
      id: 2,
      nome: 'John Willis',
      created_at: '2020-03-29 19:15:50.352',
      updated_at: '2020-03-29 19:15:50.352'
    }, {
      id: 3,
      nome: 'Jez Humble',
      created_at: '2020-03-29 19:15:53.355',
      updated_at: '2020-03-29 19:15:53.355'
    }, {
      id: 4,
      nome: 'Jim Kurose',
      created_at: '2020-03-29 19:16:25.329',
      updated_at: '2020-03-29 19:16:25.329'
    }, {
      id: 5,
      nome: 'Keith W. Ross',
      created_at: '2020-03-29 19:17:30.349',
      updated_at: '2020-03-29 19:17:30.349'
    }, {
      id: 6,
      nome: 'Doris Kowaltowski',
      created_at: '2020-03-29 19:18:01.215',
      updated_at: '2020-03-29 19:18:01.215'
    }, {
      id: 7,
      nome: 'Daniel de Carvalho Moreira',
      created_at: '2020-03-29 19:19:55.301',
      updated_at: '2020-03-29 19:19:55.301'
    }, {
      id: 8,
      nome: 'Elaine Hipólito',
      created_at: '2020-03-29 19:20:32.339',
      updated_at: '2020-03-29 19:20:32.339'
    }, {
      id: 9,
      nome: 'George S. Clason',
      created_at: '2020-03-29 19:21:41.111',
      updated_at: '2020-03-29 19:21:41.111'
    }, {
      id: 10,
      nome: 'Paulo Vieira',
      created_at: '2020-03-29 19:22:11.095',
      updated_at: '2020-03-29 19:22:11.095'
    }, {
      id: 11,
      nome: 'Eudemario Souza de Santana',
      created_at: '2020-03-29 19:23:12.115',
      updated_at: '2020-03-29 19:23:12.115'
    }, {
      id: 12,
      nome: 'Irenio de Jesus Silva Junior',
      created_at: '2020-03-29 19:24.54.223',
      updated_at: '2020-03-29 19:24.54.223'
    }, {
      id: 13,
      nome: 'Giorgio Rizzoni',
      created_at: '2020-03-29 19:25:51.412',
      updated_at: '2020-03-29 19:25:51.412'
    }, {
      id: 14,
      nome: 'Nestor Dias de Oliveira Volpini',
      created_at: '2020-03-29 19:26.15.321',
      updated_at: '2020-03-29 19:26.15.321'
    }, {
      id: 15,
      nome: 'Romeu Abdo',
      created_at: '2020-03-29 19:27.41.221',
      updated_at: '2020-03-29 19:27.41.221'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('autores', null, {})
  }
}
