import UserModel from '../models/UserModel.js';

export const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);

    if (!user) {
      return res.json({ message: 'Noy user' });
    }

    return res.json(user);
  } catch (e) {
    if (e.name === 'CastError') {
      return res.json({ message: 'Baq request' });
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
      return res.json({ message: 'Noy user' });
    }

    return res.json(user);
  } catch (e) {
    if (e.name === 'ValidationError') {
      return res.json({ message: 'Baq request' });
    }
    return next(e);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await UserModel.create(req.body);
    return res.json(user);
  } catch (e) {
    if (e.name === 'ValidationError' || e.name === 'CastError') {
      return res.status(400).json({ message: 'Incorrect data' });
    }
    return res.status(500).json({ message: 'Server not work' });
  }
};
