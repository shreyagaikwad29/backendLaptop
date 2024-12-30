const {Schema, model} = require("mongoose");

const ticketlistSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  customerType: { type: String, required: true },
  issue: { type: String, required: true },
  assignedPerson: { type: String, default: "Not Assigned" },
  createdAt: { type: Date, default: Date.now },
});

const ticketlist = model("ticketlist", ticketlistSchema);

module.exports = ticketlist;
