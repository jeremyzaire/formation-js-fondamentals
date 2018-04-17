var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CDiscount todo' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'CDiscount todo', data: req.body.nameTodo });
});

router.post('/add', function(req, res, next) {
  var rslt = {
    id: new Date().getTime(),
    label: req.body.val,
    button: {
      value: 'done',
      cssClass: ['btn', 'btn-sm', 'btn-success'],
    },
  };
  res.json({ status: 201, data: rslt });
  res.end();
});

router.put('/delete', function(req, res, next) {
  res.json({ status: 204, message: 'Delete' });
  res.end();
});

module.exports = router;
