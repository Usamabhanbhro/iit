const jwt = require('jsonwebtoken');

const adminLogin = (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    const token = jwt.sign(
      { role: 'admin', email: adminEmail },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

module.exports = { adminLogin };
