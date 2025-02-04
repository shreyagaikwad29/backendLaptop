
const ticketlist = require("../models/ticket-model");


const ticketlistform = async(req, res)=>{
    try {

      const userEmail = req.query.email; // Get user email from query parameters
      if (!userEmail) {
          return res.status(400).json({ message: "User email is required" });
      }
        const tickets = await ticketlist.find({ email: userEmail });
        console.log("Fetched Tickets:", tickets);
        res.status(200).json(tickets);
      } catch (error) {
        console.error("Error fetching tickets:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
      }
}

module.exports = ticketlistform;