const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

exports.isLoginUser = async (req, res, next)=>{
  try {
    const token= req.headers.authorization;
    console.log(req.headers);
    const {user} = await jwt.verify(token, "thisismysecretekey");
    
    const loginUser = await User.findByPk(user);
    req.user = loginUser;
    
    next();
    
  } catch (error) {
    console.log(error);
    res.send("something get wrong")
  }
}