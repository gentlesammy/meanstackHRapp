const express = require("express");
const router = express.Router();
//import controllers
const honestController = require("../controllers/honestController");

//create
router.post("/create", honestController.honest_create);

//read all
router.get("/honestlist", honestController.honest_index);

//read specific
router.get("/honestlist/detail/:id", honestController.honest_detail);

//delete
router.delete("/honestlist/:id", honestController.honest_delete);
module.exports = router;
