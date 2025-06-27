const express = require("express").Router();

const {createUsers, updateUser, deleteUsers, getAllUsers, findUserById, loginUser, updateUserBySelf}=require('../controller/praccontroller');
const fileUpload = require("../helper/multer");
const authGuard = require("../middleware/authguagrd");
const isAdmin = require("../middleware/isAdmin");

express.post("/createUsers",fileUpload('image'), createUsers);



express.get("/getallusers" ,authGuard,isAdmin,getAllUsers)


express.get("/getusersbyid/:id",authGuard,isAdmin,findUserById)

express.put("/updateUsers/:id",authGuard,isAdmin, fileUpload('image'), updateUser);



express.put("/selfUpdate",authGuard, updateUserBySelf);




express.delete("/deleteUsers/:id",authGuard,isAdmin, deleteUsers);


express.post("/login",loginUser );
module.exports=express;
