const express  =  require ('express')
const jwt = require ('jsonwebtoken')
const app = express();
const bodyParser = require ('body-parser');
const adminRouter = require ("./router/admin");
const userRouter = require ("./router/user");
 
app.use(bodyParser.json());
app.use('/Admin', adminRouter);
//app.use ('/user', userRouter );

const PORT =3000;
app.listen(PORT ,()=> {
    console.log(`listening to Port ${PORT}`);
})



