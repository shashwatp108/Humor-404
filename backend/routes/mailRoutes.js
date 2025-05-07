// routes/mailRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    // auth: {
    //   user: 'humor404.contact@gmail.com',
    //   pass: 'quxp qssh ngbw lpfy'
    // //   pass: 'Projec@1', // ⚠️ For production, use environment variables instead!
    // },
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
  });

  const mailOptions = {
    from: 'humor404.contact@gmail.com',
    to: 'shashwatp108@gmail.com',
    subject: 'Message from Humor404 Contact Form',
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

module.exports = router;
