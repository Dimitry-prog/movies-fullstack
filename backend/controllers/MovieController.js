import MovieModel from '../models/MovieModel.js';

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
      return res.status(400).json({ message: 'Baq request' });
    }
    return res.status(500).json({ message: 'Server not work' });
  }
};

export const removeMovie = async (req, res, next) => {
  try {
    const movie = await MovieModel.findByIdAndDelete(req.params.movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Card not found' });
    }
    return res.json(movie);
  } catch (e) {
    if (e.name === 'ValidationError' || e.name === 'CastError') {
      return res.status(400).json({ message: 'Incorrect data' });
    }
    return res.status(500).json({ message: 'Server not work' });
  }
};
