'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Autor.belongsToMany(models.Livro, { as: 'livros', through: 'LivroAutor', foreignKey: 'autor_id' })
    }
  };
  Autor.init(
    {
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [5, 255],
          isAlpha: true,
          notEmpty: true,
        },
      },
    }, {
      sequelize,
      modelName: "Autor",
      underscored: true,
      freezeTableName: true,
      tableName: "autores",
    }
  );
  return Autor
}
