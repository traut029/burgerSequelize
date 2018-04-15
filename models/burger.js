// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burgerName,cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  update: function(burgerId,cb) {
    orm.updateOne(burgerId, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

//test data
// burger.all(function(res){
//     console.log(res)
// })
// burger.create("veggie burger",function(res){
//     console.log(res)
// })
// burger.all(function(res){
//     console.log(res)
// })

//end test data