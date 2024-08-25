const express = require("express");
const app = express();
const sequelize = require("./utils/db.js");
const userRoute = require("./routers/user.router.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(userRoute);

sequelize.sync().then(()=> {
  app.listen(3000, ()=>{
    console.log("sever run on port 3000");
  })
});
