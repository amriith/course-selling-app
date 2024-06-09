const express = require ('express');

const {Admin, Course}= require ('../db');
const router = express.Router();

// admin creation signing up

router.post('/Signup',  async(req, res) => {
const username = req.body.username;
const password = req.body.password;

await Admin.create({
username : username ,
password : password
}) 

    res.json({
     message: "Hi Mr." + " "+ username +  " " +"created Successfully"
    })

});

// admin course adding 

router.post ('/addCourse', async (req, res) => {
const title = req.body.title;
const description = req.body.description;
const price = req.body.price;
const imageLink = req.body.imageLink;

const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink
})
res.json({
    message: "Courses Created Successfully New Course Id "+ newCourse._id 

})
});
// getting Course Details 


router.get ( '/courses', (req, res, )=>{
Course.find({})
.then(function(response){
    res.json
    ({
     Courses: response
    })
})
});
module.exports = router;