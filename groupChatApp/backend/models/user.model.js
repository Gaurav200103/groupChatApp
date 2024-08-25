const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

exports.User= sequelize.define("User", {
  name: {
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    unique:true,
    allowNull:false
  },
  phone_no:{
    type:Sequelize.STRING,
    unique:true,
    allowNull:false
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false
  }
}, {timestamps:true})

