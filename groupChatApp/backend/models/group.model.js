const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../utils/db");

exports.Group= sequelize.define("Group", {
  adminId:{
    type:Sequelize.STRING,
    allowNull:false
  },
  groupName:{
    type:Sequelize.STRING,
    allowNull:false
  }
}, {timestamps:true})

