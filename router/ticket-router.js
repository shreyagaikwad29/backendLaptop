const express = require("express");
const router = express.Router();
const createTicket = require("../controllers/ticket-controller");
const ticketlistform = require("../controllers/ticketlist-controller");

router.route("/ticket").post(createTicket);
router.route("/ticketlist").get(ticketlistform);



module.exports = router;