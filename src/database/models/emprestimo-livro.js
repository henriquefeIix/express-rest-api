'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class EmprestimoLivro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      EmprestimoLivro.belongsTo(models.Livro, { as: 'livro', foreignKey: 'livro_id' })
      EmprestimoLivro.belongsTo(models.Emprestimo, { as: 'emprestimo', foreignKey: 'emprestimo_id' })
    }
  };
  EmprestimoLivro.init({
    data_devolucao: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    emprestimo_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        isNumeric: true,
        notEmpty: true
      }
    },
    livro_id: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'EmprestimoLivro',
    underscored: true,
    freezeTableName: true,
    tableName: 'emprestimo_livros'
  })
  return EmprestimoLivro
}
