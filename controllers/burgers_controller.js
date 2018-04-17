//Dependencies
var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var Burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body)
    console.log(req.body.burgerName)
  Burger.create({
    burger_name: req.body.burgerName,
  
  }).then(function(result) {
    // send back results
    res.json(result);
  });
});

router.put("/api/devour", function(req, res) {
  burger.update(req.body.burgerId,function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.json(result)
      res.status(200).end();
    
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
