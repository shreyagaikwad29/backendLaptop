const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    mobile:{
        type:String,
        require: true,
    },
    password:{
        type:String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },

});

//? to secure passwrod with the bcrypt
userSchema.pre('save', async function(next){  // this will run before the data save in database acts as a middleware
    console.log("pre method", this);
    const user = this;
    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
});

//^ Compare the password
userSchema.methods.comparePassword = async function (password) {
   return bcrypt.compare(password, this.password);
}


//~ with help of methods we can creates more than 1 methods
userSchema.methods.generateToken = async function(){ 
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d"
        }
    )
    } catch (error) {
        console.error(error);
    }
}; 
// define the connection name

const User = new mongoose.model("User", userSchema);
module.exports = User;