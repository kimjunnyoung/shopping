const express = require('express');
const router = express.Router();
const { Register } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { username, password, email, gender, phoneNumber, address } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const register = await Register.create({
      username,
      password: hashedPassword,
      email,
      gender,
      phoneNumber,
      address,
    });
    res.status(200).json({ message: '회원가입이 완료되었습니다.', register });
  } catch (error) {
    console.error('회원가입 실패:', error);
    res.status(500).json({ error: '회원가입에 실패했습니다.' });
  }
});

module.exports = router;
