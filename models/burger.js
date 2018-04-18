// Import the sequelize to create functions that will interact with the database.
//var Sequelize = require("sequelize");

//var sequelize = require("../config/connection.js");




// Export the database functions for the controller (catsController.js).


module.exports=function(sequelize,DataTypes){
  var Burger = sequelize.define("Burger", {
    burger_name:{ 
      type:DataTypes.STRING,
    },
    devoured: {
      type:DataTypes.BOOLEAN,
      defaultValue:0
    }
  });
  return Burger
}
  


