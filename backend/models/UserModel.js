import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import RequiredAuthError from '../errors/RequiredAuthError.js';
import { ERRORS_MESSAGE } from '../utils/constants.js';

const userModel = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: (props) => `${props.value} ${ERRORS_MESSAGE.notValidEmail}`,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userModel.statics.findUserByCredentials = async function findUserByCredentials(email, password) {
  const foundUser = await this.findOne({ email }).select('+password');
  if (!foundUser) {
    throw new RequiredAuthError(ERRORS_MESSAGE.authRequired);
  }
  const checkPassword = await bcrypt.compare(password, foundUser.password);
  if (!checkPassword) {
    throw new RequiredAuthError(ERRORS_MESSAGE.authRequired);
  }
  return foundUser;
};

export default mongoose.model('userModel', userModel);
