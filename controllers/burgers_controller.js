//Dependencies
var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body)
  console.log(req.body.burgerName)
  db.Burger.create({
    burger_name: req.body.burgerName,

  }).then(function (result) {
    // send back results
    res.json(result);
  });
});

router.put("/api/devour", function (req, res) {
  console.log("put ran")
  console.log(req.body)
  console.log(req.body.id)
    db.Burger.update({
      devoured: 1
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (result) {
        res.json(result);
      })

  
})
// Export routes for server.js to use.
module.exports = router;
