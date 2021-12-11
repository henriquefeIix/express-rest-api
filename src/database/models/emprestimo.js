'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Emprestimo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Emprestimo.belongsTo(models.Aluno, { as: 'aluno', foreignKey: 'aluno_id' })
      Emprestimo.belongsToMany(models.Livro, { as: 'livros', through: 'EmprestimoLivro', foreignKey: 'emprestimo_id' })
    }
  };
  Emprestimo.init(
    {
      data_retirada: {
        allowNull: true,
        type: DataTypes.DATE,
        validate: {
          isDate: true,
          notEmpty: true,
        },
      },
      previsao_devolucao: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notNull: true,
          isDate: true,
          notEmpty: true,
        },
      },
      aluno_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          isNumeric: true,
          notEmpty: true,
        },
      },
    }, {
      sequelize,
      modelName: "Emprestimo",
      underscored: true,
      freezeTableName: true,
      tableName: "emprestimos",
    }
  );
  return Emprestimo
}
