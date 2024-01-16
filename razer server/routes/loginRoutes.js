const express = require('express');
const router = express.Router();
const { Register } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Register.findOne({ where: { username } });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        req.session.username = user.username;
        const token = jwt.sign({ username: user.username }, 'your_secret_key', { expiresIn: '1h' });
        res.status(200).json({ message: '로그인 성공', token });
      } else {
        res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
      }
    } else {
      res.status(404).json({ message: '해당 사용자가 없습니다.' });
    }
  } catch (error) {
    console.error('로그인 실패:', error);
    res.status(500).json({ error: '로그인에 실패했습니다.' });
  }
});

router.get('/', async (req, res) => {
  try {
      const users = await Register.findOne({ where: { username } });
      return res.status(200).json(users);
  } catch (error) {
      console.error(error);
      return res.status(500).json({ error: '서버 에러' });
  }
});



module.exports = router;
