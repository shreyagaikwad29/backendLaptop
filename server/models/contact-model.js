const {Schema, model} = require("mongoose");
const contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
});

//* create a model or collection

const Contact = new model("Contact", contactSchema);

module.exports = Contact;