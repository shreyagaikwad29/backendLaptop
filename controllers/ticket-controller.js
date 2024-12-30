const ticket = require("../models/ticket-model");
const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'shreyaagaikwad11@gmail.com',
    pass: 'shreya@2953',
  },
});

const sendEmail = (ticket) => {
    const mailOptions = {
      from: 'shreyaagaikwad11@gmail.com',
      to: ticket.email,
      subject: `Ticket Created: ${ticket.ticketNumber}`,
      text: `Dear ${ticket.name},
            Your ticket has been successfully created. Below are the details:
            
            - **Ticket Number**: ${ticket.ticketNumber}
            - **Assigned Person**: ${ticket.assignedPerson}
            - **Status**: ${ticket.status}
            
            We will get back to you as soon as possible.
            
            Thank you,
            Support Team`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  };

  const createTicket = async (req, res) => {
    try {
      const { name, email, issue } = req.body;
  
      // Array of possible assigned persons
      const assignedPersons = ["John Doe", "Jane Smith", "Emily Davis", "Michael Brown", "Sarah Wilson"];
  
      // Randomly select a name
      const randomAssignedPerson = assignedPersons[Math.floor(Math.random() * assignedPersons.length)];
  
      // Create the ticket
      const ticket = new Ticket({
        name,
        email,
        mobile,
        customerType,
        issue,
        assignedPerson: randomAssignedPerson,
        status: "Pending",
        createdAt: new Date(),
      });
  
      await ticket.save();
  
      // Send email to the customer
      sendEmail(ticket);
  
      res.status(201).send({ message: "Ticket created successfully", ticket });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error creating ticket" });
    }
  };
  


// const ticketForm = async(req, res)=>{
//     try {
//         const response = req.body;
//         await ticket.create(response);
//         return res.status(200).json({message: "ticket created successfully"});
//     } catch (error) {
//         return res.status(500).json({message: "ticket not created"});
//     }
// }

module.exports = { createTicket };