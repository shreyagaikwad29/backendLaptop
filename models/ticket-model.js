const {Schema, model} = require("mongoose");
const ticketSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: String, required: true},
    customerType: {type: String, required: true},
    issue: {type: String, required: true},
});

//* create a model or collection

const ticket = new model("ticket", ticketSchema);

module.exports = ticket;