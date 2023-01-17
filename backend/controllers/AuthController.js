import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';
import hashData from '../utils/hashData.js';
import { HTTP_STATUS_CODE } from '../utils/constants.js';
import BadRequestError from '../errors/BadRequestError.js';
import ExistUserError from '../errors/ExistUserError.js';

const { NODE_ENV, JWT_SECRET } = process.env;

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const authUser = await UserModel.findUserByCredentials(email, password);

    const token = jwt.sign(
      { _id: authUser._id },
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
      { expiresIn: '7d' },
    );

    return res.cookie('jwt', token, {
      maxAge: 3600000,
      httpOnly: true,
    }).send({ message: 'Authentication successful' });
  } catch (e) {
    return next(e);
  }
};

export const logoutUser = async (req, res) => res.clearCookie('jwt').send({ message: 'Bye, see you later' });

export const registerUser = async (req, res, next) => {
  try {
    const hash = await hashData(req.body.password);
    const user = await UserModel.create({
      ...req.body,
      password: hash,
    });

    return res.status(HTTP_STATUS_CODE.created).json({
      name: user.name,
      email: user.email,
      _id: user._id,
    });
  } catch (e) {
    if (e.name === 'ValidationError') {
      return next(new BadRequestError());
    }
    if (e.code === 11000) {
      return next(new ExistUserError('You already registered, please login instead'));
    }
    return next(e);
  }
};
