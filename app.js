const express = require('express');
//acquiring custom modules
const {mongo_conn} = require("./Database conn/connection.js");
const LogReq_obj = require("./Middlewares/Log_req_middleware.js");
const userRouter = require("./Routes/users.js"); 

//initialising app
const app = express();

//Mongo DB connection
mongo_conn("mongodb://localhost:27017/temporary");
//if using async function mongo_conn("mongodb://localhost:27017/temporary").then()=>{console.log("MongoDb connected")}

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(LogReq_obj.LogReq("log.txt"));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!',name:"This is Home page" });
});

// app.use("/users/:id",async (req,res,next)=>{
//     console.log("Checking user exits in the database");
//     const user_id=req.params.id
//     try{
//     let my_user = await user.findById(user_id);
//     if(!my_user){
//         throw new Error();
//     }}
//     catch(err){
//         return res.json({message: "User not found"});
//     }
//     next();
// });


app.use("/users", userRouter); //using the router for all /users routes
app.listen(3030, () => {
  console.log('Server is running on port 3030');
});
