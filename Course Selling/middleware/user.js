const {User} = require('../db');
const userMiddleWare = require('./user');

// user authentication verification 

function userMiddleWare (req,res,next){
 const username = req.headers.username;
 const password = req.headers.username;
 User.findOne({
  username : username,
  password : password
 })
 .then (function(value){
    if(value){
        next();
    } else {
        res.status(403).json({
            msg:"User Doesnt Exist"
        })
    }

})
};

module.exports = adminMiddleWare;