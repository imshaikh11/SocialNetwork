import Express from "express";
import mongoose from "mongoose";
import '../../server/models/user.js'


const router = Express.Router();
const User =  mongoose.model("User");

router.get('/',(req,res)=>{
    res.send("hello from route/auth.js")
});


router.post('/signup',(req,res)=>{
    const {name, email, password}= req.body;
    if(!email || !password || !name){
        res.status(422).json({error:"please add all details"})
    }
    User.findOne({email:email})
        .then(  (savedUSer) => {
            if(savedUSer){
                return res.status(422).json({error:"User already exists with that email"})
            }
            const user = new User({
                email,
                password,
                name
            })
            user.save()
                .then(user =>{
                    res.json({message:"saved successfully on DB"})
                })
                .catch(err => {
                    console.log(err);
                })

        })
        .catch(err => {
            console.log(err);
        })
});

export default router;