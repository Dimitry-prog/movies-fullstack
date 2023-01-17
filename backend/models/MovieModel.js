import mongoose from 'mongoose';
import validator from 'validator';
import { ERRORS_MESSAGE } from '../utils/constants.js';

const movieModel = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: (props) => `${props.value} ${ERRORS_MESSAGE.notValidLink}`,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: (props) => `${props.value} ${ERRORS_MESSAGE.notValidLink}`,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: (props) => `${props.value} ${ERRORS_MESSAGE.notValidLink}`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

export default mongoose.model('movieModel', movieModel);
