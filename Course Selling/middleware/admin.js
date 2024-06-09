//middleware handles the Auth
const {Admin} = require('../db');

function adminMiddleWare(req,res,next){
// user credentials check
    const username = req.headers.username;
    const password = req.headers.password;
    
    Admin.findOne({
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


}
module.exports = adminMiddleWare;