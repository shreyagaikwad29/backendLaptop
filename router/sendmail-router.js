const express = require("express");
const router = express.Router();
const sendmail = require("../controllers/sendmail-controller");
const upload = require("../middlewares/upload");

router.post("/send-mail", upload.single("quotationFile"),sendmail);
//router.route("/send-mail").post(sendmail);

module.exports = router;