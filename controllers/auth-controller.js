const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req, res)=>{
    try {
    res.status(200).send('hello using routes');
    } catch (error) {
        console.log(error);
    }
}

//^Signup Logic
const Signup = async(req, res) =>{
    try {
        const {name, email, mobile, password } = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"email already exist"})
        }

        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({name, email, mobile, password });

        res.status(201).json({
            msg : "registration successful", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString() });
    } catch (error) {
        res.status(500).json("internal server error");
    }
    
}


//! Login Logic

const Login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({message: "Invalid credentials"});
        }



        //& compare password
        const user = await userExist.comparePassword(password);
        // const user = await bcrypt.compare(password, userExist.password);

        if (user) {
            res.status(200).json({
                msg : "Login successful", 
                token: await userExist.generateToken(), 
                userId: userExist._id.toString(),
            });
        }
        else{
            res.status(401).json({message: "Invalid email or password"})
        }
    } catch (error) {
        // res.status(500).json("internal server error");
        next(error);
    }
}

module.exports = {home, Signup, Login};