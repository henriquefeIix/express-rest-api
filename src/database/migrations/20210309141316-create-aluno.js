'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      matricula: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      data_nascimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      curso_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'cursos'
        }
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alunos')
  }
}
