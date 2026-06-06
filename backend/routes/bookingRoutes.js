const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings, updateBookingStatus } = require('../controllers/bookingController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', createBooking);
router.get('/', protect, getAllBookings);
router.put('/:id/status', protect, updateBookingStatus);

module.exports = router;
