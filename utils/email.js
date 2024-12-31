require('dotenv').config();
const nodemailer = require('nodemailer');

// Create the Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can change this to another email service if needed
    auth: {
        user: process.env.EMAIL_USER, // Your email from the .env file
        pass: process.env.EMAIL_PASS,
        // Don't log the actual password
 // Your email password or app password
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
    },
    debug: true,
});
console.log("Email User:", process.env.EMAIL_USER);
        console.log("Email Pass Length:", process.env.EMAIL_PASS?.length); 
module.exports = transporter;
