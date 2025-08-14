//all controllers for /users requests
//IT has only functions that are attached to routes
const user = require("../Models/user_model.js"); //importing the user model
async function handleGetAllusers(req,res)
{
    const all_users = await user.find({});
    return res.json(all_users);        
}
async function handleGetUserById(req, res) {
    let users_id = req.params.id
    let my_user = await user.findById(users_id);
    if(!my_user){
        return res.json({ message: "User not found" });
    }
    return res.json(my_user);
}
async function handledeleteuserbyId(req, res) {
    const user_id = req.params.id;
    try {
        await user.findByIdAndDelete(user_id);//predefined for deleting by object Id
        return res.json({ message: "User deleted successfully" });
    } catch (err) {
        return res.json({ message: "Error deleting user" });
    }
}
async function handlecreateuser(req,res) {
    console.log("Post request recieved");
    const user_formed = await user.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        age: req.body.age
    })
    return res.json({message:"User created successfully"});
}
async function handleUpdateUser(req, res) {
    const user_id = req.params.id;
    try {
        const updated_user = await user.findByIdAndUpdate(user_id, req.body, { new: true });
        return res.json({ message: "User updated successfully", user: updated_user });
    } catch (err) {
        return res.json({ message: "Error updating user" });
    }
}
module.exports = {
    handleGetAllusers,
    handleGetUserById,
    handledeleteuserbyId,
    handlecreateuser,
    handleUpdateUser
};
