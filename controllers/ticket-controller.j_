const ticket = require("../models/ticket-model");

const ticketForm = async(req, res)=>{
    try {
        const response = req.body;
        await ticket.create(response);
        return res.status(200).json({message: "ticket created successfully"});
    } catch (error) {
        return res.status(500).json({message: "ticket not created"});
    }
}

module.exports = ticketForm;