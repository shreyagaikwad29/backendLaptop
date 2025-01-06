const nodemailer = require("nodemailer");
const path = require("path");
const transporter = require("../utils/email");

const sendMail = async (req, res) => {
  const { email, message } = req.body;
  console.log("ajgsfutyefusjzc")
  console.log(email, message)

  const quotationFile = req.file;

  if (!email || !message || !quotationFile) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    // Configure nodemailer transporter


    // Construct the mail
    const mailOptions = {
      from: "vishalb@gmail.com",
      to: email,
      subject: "Quotation Approval",
      html: `
        <p>${message}</p>
        <p>Please choose an action below:</p>
        <a href="http://localhost:3010/api/approve?id=${quotationFile.filename}">Approve</a>
        <br>
        <a href="http://localhost:3010/api/reject?id=${quotationFile.filename}">Reject</a>
      `,
      attachments: [
        {
          filename: quotationFile.originalname,
          path: path.resolve(quotationFile.path),
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
};

module.exports = sendMail;
