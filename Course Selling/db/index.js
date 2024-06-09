const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://appureejajayadeep:kfp8Z7ZXucPrQcRC@databaselearning.rehzluk.mongodb.net/');
// Defining the Schemas 
 
const AdminSchema = new mongoose.Schema ({
 
    username : String,
    password : String

});

const UserSchema = new mongoose.Schema ({

    username : String,
    password: String,
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema ({
    title : String,
    price : Number,
    description : String,
    imageLink : String
})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course =mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course

}