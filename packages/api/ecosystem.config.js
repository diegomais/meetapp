module.exports = {
  apps: [
    {
      name: 'queue',
      script: './build/queue.js',
      instances: 1,
    },
    {
      name: 'app',
      script: './build/server.js',
      instances: 5,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
