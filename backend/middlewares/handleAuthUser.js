import jwt from 'jsonwebtoken';
import RequiredAuthError from '../errors/RequiredAuthError.js';
import { ERRORS_MESSAGE, JWT_SECRET_DEV } from '../utils/constants.js';

const { NODE_ENV, JWT_SECRET } = process.env;

const handleAuthUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    next(new RequiredAuthError(ERRORS_MESSAGE.authRequired));
    return;
  }

  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV,
    );
  } catch (e) {
    next(new RequiredAuthError(ERRORS_MESSAGE.authRequired));
    return;
  }

  req.user = payload;

  next();
};

export default handleAuthUser;
