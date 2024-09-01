const {Chat} = require("../models/chat.model");
const { Group } = require("../models/group.model");
const {Op} = require("sequelize");
const sequelize = require("sequelize");

exports.sendChat = async (req, res)=>{
  try {
    const {chat, receiverId} = req.body;

    await Chat.create({UserId: req.user.id, receiverId, message: chat});

    res.send({message:"message send successfully"});

    
  } catch (error) {
    console.log(error);
  }
}

exports.receiveChat = async (req, res)=>{
  try {
    const {lastMessageId} = req.query;
    const messages = await Chat.findOne({where :{receiverId: lastMessageId}});

    res.json({messages});
    
  } catch (error) {
    console.log(error);
  }
}


exports.createGroup = async (req, res)=>{
  try {
    const {users,name} = req.body;
    await Group.create({adminId:req.user.id, groupName: name});
    res.json({message: "group created successfully"});
  } catch (error) {
    console.log(error);
  }
}

exports.createAdmin = async (req, res)=>{
  try {
    const {id, name} = req.body;

    await Group.create({adminId:"id", groupName: name});

    res.send("new admin created");
  } catch (error) {
    console.log(error);
  }
}

exports.addToGroup = async (req, res)=>{
  try {
    const {name, id} = req.body;
    console.log(req.body);
    await Group.create({adminId:req.user.id, groupName: name, UserId: id});
    res.send("user added into group");
    
  } catch (error) {
    console.log(error);
  }
}

exports.removeFromGroup = async (req, res)=>{
  try {
    const {id, name} = req.body;

    await Group.destroy({where :{UserId: id, groupName: name}})
  } catch (error) {
    console.log(error);
  }
}

exports.getGroup = async (req, res)=>{
  try {

    const groups = await Group.findAll({where : {[Op.or]:[{UserId : req.user.id}, {adminId : req.user.id}]}});

    const updatedGroup = groups.map(item =>{
      if(item.adminId == req.user.id){
        return {...item, isAdmin:true}
      }
      else{
        return {...item, isAdmin:false}
      }
    })

    

    res.json({groups: updatedGroup});
    
  } catch (error) {
    console.log(error);
  }
}