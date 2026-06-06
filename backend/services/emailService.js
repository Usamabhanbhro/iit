const nodemailer = require('nodemailer');

const sendStatusEmail = async (booking) => {
  if (!booking.email) return;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let subject = '';
    let text = '';

    if (booking.status === 'accepted') {
      subject = 'Consultation Booking Accepted';
      text = `Dear ${booking.name},\n\nYour consultation booking for ${booking.date} at ${booking.time} has been accepted.\n\nThank you,\nTechnify Team`;
    } else if (booking.status === 'declined') {
      subject = 'Consultation Booking Declined';
      text = `Dear ${booking.name},\n\nWe regret to inform you that your consultation booking for ${booking.date} at ${booking.time} has been declined. Please try booking another time.\n\nThank you,\nTechnify Team`;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: booking.email,
      subject: subject,
      text: text
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${booking.email}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendStatusEmail };
