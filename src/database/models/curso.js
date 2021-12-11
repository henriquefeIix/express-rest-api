'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Curso.hasMany(models.Aluno, { as: 'alunos', foreignKey: 'curso_id' })
    }
  };
  Curso.init(
    {
      descricao: {
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
      modelName: "Curso",
      underscored: true,
      freezeTableName: true,
      tableName: "cursos",
    }
  );
  return Curso
}
