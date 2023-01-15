import MovieModel from '../models/MovieModel.js';
import BadRequestError from '../errors/BadRequestError.js';
import NotFoundError from '../errors/NotFoundError .js';

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

    return res.json(movie);
  } catch (e) {
    if (e.name === 'ValidationError') {
      return next(new BadRequestError());
    }
    return next(e);
  }
};

export const removeMovie = async (req, res, next) => {
  try {
    const movie = await MovieModel.findByIdAndDelete(req.params.movieId);

    if (!movie) {
      return next(new NotFoundError('Movie not found'));
    }
    return res.json(movie);
  } catch (e) {
    if (e.name === 'CastError') {
      return next(new BadRequestError());
    }
    return next(e);
  }
};
