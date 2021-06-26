const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common/config');
const UnauthorizedError = require('../errors/not-auth-err');

const auth  = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  const token = req.cookies.jwt;
  let payload = '';
  try {
    payload = jwt.verify(token, JWT_SECRET_KEY);
  } catch (e) {
    const err = new UnauthorizedError('Необходима авторизация');
    next(err);
  }
  req.user = payload;
  return next();
};

export default auth;
