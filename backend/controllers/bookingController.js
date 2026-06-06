const Booking = require('../models/Booking');
const { sendStatusEmail } = require('../services/emailService');

const createBooking = async (req, res) => {
  try {
    const { date, time, name, fatherName, age, contactNumber, email } = req.body;

    const newBooking = new Booking({
      date,
      time,
      name,
      fatherName,
      age,
      contactNumber,
      email
    });

    await newBooking.save();
    res.status(201).json({ success: true, booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['accepted', 'declined'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    booking.status = status;
    await booking.save();

    // Send email if email exists
    await sendStatusEmail(booking);

    res.json({ success: true, booking });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { createBooking, getAllBookings, updateBookingStatus };
