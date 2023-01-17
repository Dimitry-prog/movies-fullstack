import MovieModel from '../models/MovieModel.js';
import BadRequestError from '../errors/BadRequestError.js';
import NotFoundError from '../errors/NotFoundError .js';
import ForbiddenError from '../errors/ForbiddenError.js';
import { ERRORS_MESSAGE, ERRORS_NAME, HTTP_STATUS_CODE } from '../utils/constants.js';

export const getMovies = async (req, res, next) => {
  try {
    const movies = await MovieModel.find({});
    return res.json(movies);
  } catch (e) {
    return next(e);
  }
};

export const createMovie = async (req, res, next) => {
  try {
    const movie = await MovieModel.create({
      ...req.body,
      owner: req.user._id,
    });

    return res.status(HTTP_STATUS_CODE.created).json(movie);
  } catch (e) {
    if (e.name === ERRORS_NAME.validationError) {
      return next(new BadRequestError());
    }
    return next(e);
  }
};

export const removeMovie = async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.movieId).populate(['owner']);

    if (!movie) {
      return next(new NotFoundError(ERRORS_MESSAGE.movieNotFound));
    }
    if (String(movie.owner._id) !== req.user._id) {
      return next(new ForbiddenError(ERRORS_MESSAGE.forbiddenDeleteMovie));
    }

    await movie.remove();

    return res.json(movie);
  } catch (e) {
    if (e.name === ERRORS_NAME.castError) {
      return next(new BadRequestError());
    }
    return next(e);
  }
};
