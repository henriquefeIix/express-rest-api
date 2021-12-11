module.exports = {

  development: {
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'biblioteca',
    migrationStorageTableName: 'sequelize_meta',
    dialect: 'mysql',
    dialectOptions: {
      typeCast: (field, next) => {
        if (field.type === 'DATETIME' || field.type === 'TIMESTAMP') {
          return new Date(field.string() + 'Z')
        }
        return next()
      }
    },
    operatorsAliases: 0,
    timezone: '-03:00',
    logging: false,
    define: {
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  },

  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },

  production: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    migrationStorageTableName: 'sequelize_meta',
    dialect: 'mysql',
    dialectOptions: {
      typeCast: (field, next) => {
        if (field.type === 'DATETIME' || field.type === 'TIMESTAMP') {
          return new Date(field.string() + 'Z')
        }
        return next()
      }
    },
    operatorsAliases: 0,
    timezone: '-03:00',
    logging: false,
    define: {
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }

}
