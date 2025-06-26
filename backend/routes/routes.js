const express = require("express");
const  {getAllUsers,createUser, updateUser,deleteUser, createOrder,createAddress,getAllProducts} = require("../controller/userController");
const fileUpload = require("../helper/multer");
const router = express.Router();

router.get("/users", getAllUsers);

router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.post("/order", createOrder);
router.post("/address", createAddress);
router.get("/product", getAllProducts);

module.exports = router;
