import MovieModel from '../models/MovieModel.js';
import BadRequestError from '../errors/BadRequestError.js';
import NotFoundError from '../errors/NotFoundError .js';
import ForbiddenError from '../errors/ForbiddenError.js';

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
    if (String(movie.owner._id) !== req.user._id) {
      return next(new ForbiddenError('You don\'t have permission for delete this card'));
    }

    await movie.remove();

    return res.json(movie);
  } catch (e) {
    if (e.name === 'CastError') {
      return next(new BadRequestError());
    }
    return next(e);
  }
};
