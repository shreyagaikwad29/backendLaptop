const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const ticket = require("../models/ticket-model");
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, {password: 0});
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
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

const deleteContactById = async (req, res) => {
    try {
       const id = req.params.id;
       await Contact.deleteOne({ _id: id });   
       return res.status(200).json({message: "Contact Deleted Successfully "}); 
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

const getUserById = async (req, res, next) => {
    try {
       const id = req.params.id;
       const data = await User.findOne({_id:id}, {password:0});
       if (!data) {
        return res.status(404).json({ message: "User not found" });
       }   
       return res.status(200).json(data); 
    } catch (error) {
        next(error);
    }
}

const updateUserById = async (req, res)=>{
    try {
        const id = req.params.id;
        const updateUserData = req.body;
        const updateUser = await User.findByIdAndUpdate({_id: id}, 
        {
            $set: updateUserData,
        },        
        { new: true } 
    );
        return res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}

const getAlltickets = async (req, res) =>{
    try {
        const admintickets = await ticket.find();
        console.log("admintickets",admintickets);
        if (!admintickets || admintickets.length === 0) {
            return res.status(404).json({message: "no tickets found"});
        }
        return res.status(200).json(admintickets);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUserById , getUserById, updateUserById, deleteContactById, getAlltickets};