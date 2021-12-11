'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('livros', [{
      id: 1,
      titulo: 'Manual de DevOps',
      ano_publicacao: '2020',
      local_publicacao: 'São Paulo',
      created_at: '2020-03-29 18:48:25.349',
      updated_at: '2020-03-29 18:48:25.349'
    }, {
      id: 2,
      titulo: 'Redes de Computadores e a Internet: Uma Abordagem Top-Down',
      ano_publicacao: '2015',
      local_publicacao: 'São Paulo',
      created_at: '2020-03-29 18:50:25.353',
      updated_at: '2020-03-29 18:50:25.353'
    }, {
      id: 3,
      titulo: 'O Processo de Projeto em Arquitetura: da Teoria à Tecnologia',
      ano_publicacao: '2011',
      local_publicacao: 'São Paulo',
      created_at: '2020-03-29 18:54:02.358',
      updated_at: '2020-03-29 18:54:02.358'
    }, {
      id: 4,
      titulo: 'Pequeno Livro de Decoração',
      ano_publicacao: '2012',
      local_publicacao: 'São Paulo',
      created_at: '2020-03-29 18:55:58.359',
      updated_at: '2020-03-29 18:55:58.359'
    }, {
      id: 5,
      titulo: 'O Homem Mais Rico da Babilônia',
      ano_publicacao: '2017',
      local_publicacao: 'São Paulo',
      created_at: '2020-03-29 18:56:51.421',
      updated_at: '2020-03-29 18:56:51.421'
    }, {
      id: 6,
      titulo: 'O Poder da Autorresponsabilidade',
      ano_publicacao: '2018',
      local_publicacao: 'São Paulo',
      created_at: '2020-03-29 18:57:32.214',
      updated_at: '2020-03-29 18:57:32.214'
    }, {
      id: 7,
      titulo: 'Teoria e Análise de Circuitos Elétricos',
      ano_publicacao: '2011',
      local_publicacao: 'São Paulo',
      created_at: '2020-03-29 18:58:11.211',
      updated_at: '2020-03-29 18:58:11.211'
    }, {
      id: 8,
      titulo: 'Fundamentos De Engenharia Elétrica',
      ano_publicacao: '2012',
      local_publicacao: 'São Paulo',
      created_at: '2020-03-29 18:59:33.225',
      updated_at: '2020-03-29 18:59:33.225'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('livros', null, {})
  }
}
