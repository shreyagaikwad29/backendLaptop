const ticketlist = require("../models/ticket-model");

const ticketlistform = async(req, res)=>{
    try {
        const tickets = await ticketlist.find();
        console.log("Fetched Tickets:", tickets);
        res.status(200).json(tickets);
      } catch (error) {
        console.error("Error fetching tickets:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
      }
}
  
module.exports = ticketlistform;