'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('emprestimo_livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_devolucao: {
        type: Sequelize.DATE
      },
      emprestimo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'emprestimos'
        },
        onDelete: 'CASCADE'
      },
      livro_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'livros'
        },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('emprestimo_livro')
  }
}
