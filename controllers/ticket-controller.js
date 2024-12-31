// const ticket = require("../models/ticket-model");
// const nodemailer = require("nodemailer");





// const ticketForm = async(req, res)=>{
//     try {
//         const response = req.body;
//         await ticket.create(response);
//         return res.status(200).json({message: "ticket created successfully"});
//     } catch (error) {
//         return res.status(500).json({message: "ticket not created"});
//     }
// }

// module.exports = ticketForm;

const ticket = require("../models/ticket-model");
const transporter = require("../utils/email"); // Import the transporter

const ticketForm = async (req, res) => {
    try {
        const response = req.body;
        console.log("Request body:", response); 
        // Save the ticket to the database
        await ticket.create(response);
        console.log("Ticket saved to database");

        // Email details
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address from the .env file
            to: response.email, // Recipient's email from the request body
            subject: 'Ticket Created Successfully',
            text: `
                Hello ${response.name},

                Thank you for reaching out to us. Your ticket has been successfully created. We will address your concern as soon as possible.

                Here are your ticket details:
                Name: ${response.name}
                Mobile: ${response.mobile}
                Customer Type: ${response.customerType}
                Issue: ${response.issue}

                Best regards,
                Your Support Team`,
        };
        console.log("Mail options:", mailOptions);
        // Send the email
        // await transporter.sendMail(mailOptions);

        try {
            await transporter.sendMail(mailOptions);
            console.log("Email sent successfully");
        } catch (emailError) {
            console.error("Error sending email:", emailError);
            throw new Error("Email sending failed");
        }
        
        

        return res.status(200).json({ message: "Ticket created and email sent successfully" });
    } catch (error) {
        console.error("Error in ticketForm:", error);
        return res.status(500).json({ message: "Ticket not created or email failed to send" });
    }
};

module.exports = ticketForm;
