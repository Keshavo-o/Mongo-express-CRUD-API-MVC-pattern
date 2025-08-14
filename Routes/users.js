const express = require('express');

const router = express.Router(); // we created a router here and instead of using app.get or app.post for our requests we will use router.get and router.post
const{
    handleGetAllusers,
    handleGetUserById,
    handledeleteuserbyId,
    handlecreateuser,
    handleUpdateUser
} = require("../Controllers/user.js"); //importing the controller function for getting all users

//HEre router is an isolated router

//and as router is just for /users routes we can remve /users from out urls 

router
.route("/:id")
.get(handleGetUserById)
.delete(handledeleteuserbyId)   
.patch(handleUpdateUser );//for user with an ID


router.route("/")
.get(handleGetAllusers)
.post(handlecreateuser);//for all users


module.exports = router; // exporting the router so that we can use it in app.js