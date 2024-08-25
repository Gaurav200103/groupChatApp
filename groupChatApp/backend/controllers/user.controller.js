const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken")

exports.addUser = async (req, res)=>{
  try {
    const {name, email, phone_no, password} = req.body;
    const bcryptPassword = await bcrypt.hash(password, 10);
    console.log(req.body);
    const user = await User.create({name, email, phone_no, password: bcryptPassword});

    res.send("user created successfully");

  } catch (error) {
    console.log(error);
    
  }
}

exports.loginUser = async (req, res)=>{
  try {
    const {email, password} = req.body;

    const user = await User.findOne({where : {email : email}});

    if(!user){
      return res.status(201).json({
        login:false,
        message:"User not found with this credential"
      })
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if(isCorrect == false){
      return res.status(201).json({
        login:false,
        message:"User not found with this credential"
      })
    }

    const token = jwt.sign({user:user.id}, "thisismysecretekey");

    res.status(201).json({
      login:true,
      message:"User login successfully",
      token
    })

  } catch (error) {
    res.status(401).json({
      login:false,
      message:"User not found with this credential"
    })
  }
};