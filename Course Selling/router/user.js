const express = require ('express');
const {Admin}= require ('../db');
const router = express.Router();

// admin creation signing up

router.post('/signUp',  async(req, res) => {
const username = req.body.username;
const password = req.body.password;

await Admin.create({
username : username ,
password
}) 
 res.json({
    msg: "Admin created Successfully "
})

});

// admin course adding 

router.post ('/addCourse', (req, res) => {

});
// getting Course Details 


router.get ( '/courses', (req, res)=>{

});
