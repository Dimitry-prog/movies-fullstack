import UserModel from '../models/UserModel.js';
import NotFoundError from '../errors/NotFoundError .js';
import BadRequestError from '../errors/BadRequestError.js';

export const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);

    if (!user) {
      return next(new NotFoundError('User not found'));
    }

    return res.json(user);
  } catch (e) {
    if (e.name === 'CastError') {
      return next(new BadRequestError());
    }
    return next(e);
  }
};

export const updateUserInfo = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const data = {
      name,
      email,
    };
    const user = await UserModel.findByIdAndUpdate(req.user._id, data, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return next(new NotFoundError('User not found'));
    }

    return res.json(user);
  } catch (e) {
    if (e.name === 'ValidationError') {
      return next(new BadRequestError());
    }
    return next(e);
  }
};
