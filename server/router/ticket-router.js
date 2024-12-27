const express = require("express");
const router = express.Router();
const ticketForm = require("../controllers/ticket-controller");
const ticketlistform = require("../controllers/ticketlist-controller");

router.route("/ticket").post(ticketForm);
router.route("/ticketlist").get(ticketlistform);



module.exports = router;