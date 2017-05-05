const express = require('express');
const router = express.Router();
const admin = require('../firebaseInit.js');

router.get('/', (req, res) => {
  res.json('api works');
});

router.post('/users/auth', (req, res) => {
  let uid = req.body.uid;
  admin.database().ref('admin/' + uid).once('value').then(snapshot => {
    let response = snapshot.val() === 'superuser';
    res.json(response);
  });
});

module.exports = router;
