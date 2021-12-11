'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('alunos', [{
      id: 1,
      nome: 'Adriana Ayla Barros',
      cpf: '196.404.900-83',
      matricula: '20152131010',
      senha: '$2b$10$1LjnrWS0XsMys9sm88oaA.USaDkRBPI0Z0wYfPO/UMfFNaUy4rpfG',
      data_nascimento: '1994-03-01',
      telefone: '(83) 98212-2523',
      endereco: 'Conjunto Juracy Palhano, 330',
      curso_id: 1,
      created_at: '2020-03-29 18:32:49.321',
      updated_at: '2020-03-29 18:32:49.321'
    }, {
      id: 2,
      nome: 'Jaqueline Isabel Moraes',
      cpf: '189.106.450-91',
      matricula: '20181132020',
      senha: '$2b$10$VXGKhAPQ029TrFdgUXp0vuWaYg5cUbz39ZuFGKxwVa/ch22udeeYm',
      data_nascimento: '1996-05-15',
      telefone: '(83) 987521-2123',
      endereco: 'Av. Joaquim Ribeiro dos Santos Meira, 668',
      curso_id: 2,
      created_at: '2020-03-29 18:35:49.353',
      updated_at: '2020-03-29 18:35:49.353'
    }, {
      id: 3,
      nome: 'Luiz Marcos Vinicius Viana',
      cpf: '808.335.804-50',
      matricula: '20162133015',
      senha: '$2b$10$mL.zFRWOA1OPn7eVKdEaYexZ/CmI0eNpt9K6fH3jQwEe54m.B1Sza',
      data_nascimento: '1996-07-27',
      telefone: '(83) 93690-7436',
      endereco: 'Av. Ministro José Américo de Almeida, 270',
      curso_id: 3,
      created_at: '2020-03-29 18:36:08.112',
      updated_at: '2020-03-29 18:36:08.112'
    }, {
      id: 4,
      nome: 'Rayssa Lavínia Almeida',
      cpf: '001.328.745-12',
      matricula: '20171134002',
      senha: '$2b$10$WCFO72QKqW8he6A5vSzCbOT6E2SVHoZDUpg8nsXhHxHONrsz3Ovq6',
      data_nascimento: '1961-07-21',
      telefone: '(83) 98600-2233',
      endereco: 'Rua Comerciante José Miguel Neto, 100',
      curso_id: 4,
      created_at: '2020-03-29 18:38:31.143',
      updated_at: '2020-03-29 18:38:31.143'
    }, {
      id: 5,
      nome: 'Lívia Priscila Carvalho',
      cpf: '306.318.552-38',
      matricula: '20141132025',
      senha: '$2b$10$pQWcd.6gSocRbMWlmasV9ea6hdhZD6qzqEY2oIeXVWDszY5vrC/su',
      data_nascimento: '1989-12-02',
      telefone: '(83) 98270-6943',
      endereco: 'Rua Afonso Barbosa de Oliveira, 1025',
      curso_id: 2,
      created_at: '2020-03-29 18:45:12.158',
      updated_at: '2020-03-29 18:45:12.158'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('alunos', null, {})
  }
}
