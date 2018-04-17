// Set up MySQL sequelize.
var Sequelize = require("sequelize");

var sequelize;
if (process.env.JAWSDB_URL) {
    sequelize=mysql.createsequelize(process.env.JAWSDB_URL);
}
else {
    var sequelize = new Sequelize("burgers_db", "root", "root", {
        host: "localhost",
        port:8889,
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
      });
}

// Export sequelize for our ORM to use.
module.exports = sequelize;
