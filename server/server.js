const express = require('express');
const https = require('https');
const fs = require('fs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Nauja žinutė nuo kliento art-bernadeta',
    text: `Vardas: ${name}\nKliento el.paštas: ${email}\nŽinutė: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
});

const PORT = process.env.PORT || 3001;

// Load SSL certificate and key files
const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/art-bernadeta.ch-0001/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/art-bernadeta.ch-0001/privkey.pem')
};

// Create HTTPS server
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});