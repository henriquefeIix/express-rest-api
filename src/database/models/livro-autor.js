'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class LivroAutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      LivroAutor.belongsTo(models.Livro, { as: 'livro', foreignKey: 'livro_id' })
      LivroAutor.belongsTo(models.Autor, { as: 'autor', foreignKey: 'autor_id' })
    }
  };
  LivroAutor.init({
    autor_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        isNumeric: true,
        notEmpty: true
      }
    },
    livro_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        isNumeric: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'LivroAutor',
    underscored: true,
    freezeTableName: true,
    tableName: 'livro_autores'
  })
  return LivroAutor
}
