const express = require('express');
const jwt = require('jsonwebtoken');
const router = new express.Router();
const User = require('mongoose').model('User');

router.get('/counter', (req, res) => {
  res.status(200).json({
    message: "You're authorized"
  });
});

router.get('/get-counter', async (req, res) => {

  const token = req.headers.authorization.split(' ')[1];

  return jwt.verify(token, 'a secret phrase', (err, decoded) => {
    if (err) { 
      return res.status(400).end(); 
    }

    const userId = decoded.sub;

    User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(400).end();
      }
      res.send({data: (user.counter)});
    });
  });
});

router.post('/set-counter', async (req, res) => {

  const token = req.headers.authorization.split(' ')[1];

  return jwt.verify(token, 'a secret phrase', (err, decoded) => {
    if (err) { 
      return res.status(400).end(); 
    }

    const userId = decoded.sub;

    User.update({ _id: userId }, {"$set": { counter: req.body.counter }}, ((err)=>{console.error(err)}));
    res.status(201).send('POST request'); 
  });
})

module.exports = router;
