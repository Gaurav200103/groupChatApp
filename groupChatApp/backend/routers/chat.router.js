const express = require("express");
const { isLoginUser } = require("../middlewares/auth");
const { sendChat, receiveChat, createGroup, getGroup, addToGroup, createAdmin, removeFromGroup } = require("../controllers/chat.controller");

const router = express.Router();

router.post("/sendChat", isLoginUser, sendChat);

router.get("/getChats", isLoginUser, receiveChat);

router.post("/createGroup", isLoginUser, createGroup);

router.get("/getGroups", isLoginUser, getGroup);

router.post("/addToGroup",isLoginUser, addToGroup);

router.post("/addAdmin", isLoginUser, createAdmin);

router.delete("/deleteUser", isLoginUser, removeFromGroup);

module.exports = router;