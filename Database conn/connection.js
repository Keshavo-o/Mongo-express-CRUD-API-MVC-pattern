const mongoose = require("mongoose");
function mongo_conn(url)
{
    mongoose.connect(url).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});
}
//can also set this as an async function -
// async function mongo_conn(url)
// {
//     try {
//         await mongoose.connect(url);
//         console.log("Connected to MongoDB");
//     } catch (err) {
//         console.error("Error connecting to MongoDB:", err);
//     }
// }

//one more method  -  what we learnt
//async function mongo_conn(url)
//{
// return mongoose.connect(url);
//}
module.exports = {mongo_conn};