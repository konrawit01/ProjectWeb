import express from 'express';
import User from '../models/userModel';

const router = express.Router();


router.post('/register', async(req, res) => {
    const user =new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,   

    });
    const newUser = await user.save();
    if (newUser){
        res.send({
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    }else {
        res.status(401),send({ msg: 'Invalid User Data'});
    }

})

router.post('/signin', async(req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    }else {
        res.status(401),send({ msg: 'Invalid Email or Password'});
    }

})

router.get("/createadmin", async (req, res) => {
    try{
        const user = new User({
            name: 'กรวิชญ์ จันเทศ',
            email: 'konrawit.ch.62@ubu.ac.th',
            password: '123456789Asd',
            isAdmin: true
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error){
    res.send({msg: error.message});
    }       
})

export default router;