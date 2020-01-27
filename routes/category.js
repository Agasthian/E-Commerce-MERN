const express = require('express');
const router = express.Router();

const {
  create,
  categoryById,
  read,
  list,
  remove,
  update
} = require('../controllers/category');
const { requireSignin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAdmin, isAuth, create);
router.put(
  '/category/:categoryId/:userId',
  requireSignin,
  isAdmin,
  isAuth,
  update
);
router.delete(
  '/category/:categoryId/:userId',
  requireSignin,
  isAdmin,
  isAuth,
  remove
);
router.get('/categories/', list);

router.param('userId', userById);
router.param('categoryId', categoryById);

module.exports = router;
