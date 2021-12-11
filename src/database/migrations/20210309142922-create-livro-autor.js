'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('livro_autores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      autor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'autores'
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
    await queryInterface.dropTable('livros_autores')
  }
}
