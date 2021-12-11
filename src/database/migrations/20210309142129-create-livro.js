'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ano_publicacao: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      local_publicacao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sinopse: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('livros')
  }
}
