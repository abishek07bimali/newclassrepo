const { createUsers, updateUsers } = require("../controller/testController");
const express = require("express").Router();

express.post("/createUsers", createUsers);
express.put("/updateUsers/:uid", updateUsers);

// http://localhost:5555/apiv1/testing/updateUsers/12443
module.exports = express;
