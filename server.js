const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const sendEmail = require("./sendMailUtil");
const app = express();

//some middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//Step 1 - Create Route
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.post("/contact/sendemail", async (req, res) => {
  const { email, firstName, lastName, message } = req.body;

  console.log(email + " " + firstName + " " + lastName + " " + message)
  try {
    const sent_from = email;
    const subject = firstName + " " + lastName + " | Email from sent Portfolio Website";
    const bodyMessage = `<p>Name: ${firstName + " " + lastName}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`

    await sendEmail(subject, bodyMessage, sent_from);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
