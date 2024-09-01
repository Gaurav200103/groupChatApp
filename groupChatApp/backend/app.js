const express = require("express");
const app = express();
const socket = require("socket.io");
const http = require("http");
const sequelize = require("./utils/db.js");
const userRoute = require("./routers/user.router.js");
const chatRoute = require("./routers/chat.router.js");
const cors = require("cors");
const { User } = require("./models/user.model.js");
const { Chat } = require("./models/chat.model.js");
const { Group } = require("./models/group.model.js");
const path = require("path");


const server = http.createServer(app);
const io = socket(server, {
  cors:{
    origin:"*"
  }
});


io.on('connection', (socket) => {
  console.log('New user connected');

  

  socket.on('sendMessage', async (message) => {
    await Chat.create({UserId:'1',receiverId: message.id,message: message.message});
    console.log(message);

    const chat = await Chat.findOne({where : {receiverId: message.id}});

    console.log(chat);
    io.emit('message', chat);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
})

app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(chatRoute);
User.hasMany(Chat);
Chat.belongsTo(User);
User.hasMany(Group);
Group.belongsTo(User);



sequelize.sync().then(() => {
  server.listen(3000, () => {
    console.log("sever run on port 3000");
  })
});
