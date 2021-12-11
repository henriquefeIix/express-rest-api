'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Livro.belongsToMany(models.Autor, { as: 'autores', through: 'LivroAutor', foreignKey: 'livro_id' })
      Livro.belongsToMany(models.Emprestimo, { as: 'emprestimos', through: 'LivroEmprestimo', foreignKey: 'livro_id' })
    }
  };
  Livro.init(
    {
      titulo: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [5, 255],
          notEmpty: true,
        },
      },
      ano_publicacao: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          len: [4, 4],
          isNumeric: true,
          notEmpty: true,
        },
      },
      local_publicacao: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 255],
          notEmpty: true,
        },
      },
      sinopse: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: true,
          len: [0, 500],
          notEmpty: true,
        },
      },
    }, {
      sequelize,
      modelName: "Livro",
      underscored: true,
      freezeTableName: true,
      tableName: "livros",
    }
  );
  return Livro
}
