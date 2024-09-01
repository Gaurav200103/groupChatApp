const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

exports.Chat= sequelize.define("Chat", {
  receiverId:{
    type:Sequelize.STRING,
    allowNull:false
  },
  message:{
    type:Sequelize.STRING,
    allowNull: false
  }
}, {timestamps:true})

