// Import the sequelize to create functions that will interact with the database.
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");




// Export the database functions for the controller (catsController.js).



  var Burger = sequelize.define("Burger", {
    burger_name:{ 
      type:Sequelize.STRING,
    },
    devoured: {
      type:Sequelize.BOOLEAN,
      defaultValue:0
    }
  });

  Burger.sync(); 


module.exports=Burger;