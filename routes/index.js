var express = require('express');
var router = express.Router();
const cUsers = require('../apps/controllers/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/list', cUsers.list);
router.post('/user', cUsers.create);
router.patch('/user', cUsers.update);
router.delete('/user', cUsers.delete);

module.exports = router;
