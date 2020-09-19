const configuration = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'meetapp',
    define: { timestamps: true, underscored: true, underscoredAll: true },
  },
  production: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dialectOptions: { ssl: { rejectUnauthorized: false } },
    define: { timestamps: true, underscored: true, underscoredAll: true },
  },
  test: { dialect: 'sqlite', storage: './src/database/test.sqlite' },
};

const connectionConfiguration = () => {
  if (process.env.NODE_ENV === 'test') {
    return configuration.test;
  } else if (process.env.NODE_ENV === 'production') {
    return configuration.production;
  } else {
    return configuration.development;
  }
};

module.exports = connectionConfiguration();
