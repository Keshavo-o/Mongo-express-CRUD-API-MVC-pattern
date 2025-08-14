const fs = require("fs");
// function logReq(req, res, next) {
//     console.log("New request received from device ip" + req.ip + " from path '" + req.path + "'\n");
//     const html = "\nNew request received from device ip" + req.ip + " from path '" + req.path + "'" + " for request method:" + req.method;
//     fs.appendFile("./log.txt", html, () => {
//         console.log("logged the request");
//     })
//     next();
// }

//This is an easy method of doing it . Actually you can do as you like but  a generally used method is actually returning the whole function back to code

function LogReq(filename) {
    //we will return an anonymous function
return (req, res, next) => {
    console.log("New request received from device ip"+req.ip + " from path '"+req.path + "'\n");
    const html = "\nNew request received from device ip"+req.ip + " from path '"+req.path + "'"+" for request method:"+req.method;
    fs.appendFile(filename,html,()=>{
        console.log("logged the request");
    })
    next();
}
}
module.exports = {LogReq};