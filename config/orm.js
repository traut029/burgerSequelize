var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burgerName,cb) {
        var queryString = "INSERT burgers (burger_name) values (?)";
        connection.query(queryString,[burgerName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (burgerId,cb) {
        var queryString = "UPDATE burgers set devoured=1 where id=?";
        connection.query(queryString,[burgerId], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;

//test data
// orm.selectAll(function (result) {
//     console.log(result)
// })
// orm.updateOne(2,function (result) {
//     console.log(result)
// })
// orm.selectAll(function (result) {
//     console.log(result)
// })
  //test data end