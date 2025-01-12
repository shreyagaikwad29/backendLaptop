const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({message: "no useres found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContacts =async (req, res) =>{
    try {
        const contacts = await Contact.find();
        console.log("contacts",contacts);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({message: "no Contacts found"});
        }
    } catch (error) {
        next(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
       const id = req.params.id;
       await User.deleteOne({ _id: id });   
       return res.status(200).json({message: "User Deleted Successfully "}); 
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res) => {
    try {
       const id = req.params.id;
       await User.FindOne({_id:id})   
       return res.status(200).json({message: "User Defined Successfully "}); 
    } catch (error) {
        next(error);
    }
}



module.exports = { getAllUsers, getAllContacts, deleteUserById , getUserById};