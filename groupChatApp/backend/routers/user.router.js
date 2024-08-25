const express = require("express");
const { addUser, loginUser } = require("../controllers/user.controller");
const { isLoginUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", addUser);

router.post("/login", loginUser);

router.get("/", isLoginUser, (req, res)=>{res.send("hello world")});


module.exports = router;