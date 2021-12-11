const bcrypt = require('bcrypt')
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Aluno.belongsTo(models.Curso, { as: 'curso', foreignKey: 'curso_id' })
      Aluno.hasMany(models.Emprestimo, { as: 'emprestimos', foreignKey: 'aluno_id' })
    }

    toJSON () {
      const aluno = Object.assign({}, this.get())
      delete aluno.senha
      return aluno
    }
  };
  Aluno.init(
    {
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [5, 255],
          notEmpty: true,
        },
      },
      cpf: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [11, 15],
          notEmpty: true,
        },
      },
      matricula: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          isNumeric: true,
          notEmpty: true,
        },
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [8, 65],
          notEmpty: true,
        },
      },
      data_nascimento: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notNull: true,
          isDate: true,
          notEmpty: true,
        },
      },
      telefone: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [8, 15],
          notEmpty: true,
        },
      },
      endereco: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [3, 255],
          notEmpty: true,
        },
      },
      curso_id: {
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
      modelName: "Aluno",
      underscored: true,
      freezeTableName: true,
      tableName: "alunos",
      scopes: {
        curso: function () {
          return {
            attributes: { exclude: ["curso_id"] },
            include: { model: sequelize.models.Curso, as: "curso" },
          };
        },
      },
    }
  );
  Aluno.addHook('beforeCreate', (aluno, options) => {
    aluno.senha = bcrypt.hashSync(aluno.senha, 10)
  })
  return Aluno
}
