import UserModel from '../models/UserModel.js';
import NotFoundError from '../errors/NotFoundError .js';
import BadRequestError from '../errors/BadRequestError.js';
import {ERRORS_MESSAGE, ERRORS_NAME} from '../utils/constants.js';

export const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);

    if (!user) {
      return next(new NotFoundError(ERRORS_MESSAGE.userNotFound));
    }

    return res.json(user);
  } catch (e) {
    if (e.name === ERRORS_NAME.castError) {
      return next(new BadRequestError());
    }
    return next(e);
  }
};

export const updateUserInfo = async (req, res, next) => {
  try {
    const {name, email} = req.body;
    const data = {
      name,
      email,
    };
    const user = await UserModel.findByIdAndUpdate(req.user._id, data, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return next(new NotFoundError(ERRORS_MESSAGE.userNotFound));
    }

    return res.json(user);
  } catch (e) {
    if (e.name === ERRORS_NAME.validationError) {
      return next(new BadRequestError());
    }
    return next(e);
  }
};
