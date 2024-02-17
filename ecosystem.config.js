module.exports = {
    apps : [{
      name   : "backend",
      script : "./backend/dist/server.js",
      args: 'start --watch',
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      }
    },
    {
        name   : "frontend",
        script : "./frontend/server.js",
        args: 'start --watch',
        env_production: {
           NODE_ENV: "production"
        },
        env_development: {
           NODE_ENV: "development"
        }
      }]
  }