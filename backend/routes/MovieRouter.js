import Router from 'express';
import { createMovie, getMovies, removeMovie } from '../controllers/MovieController.js';
import { validationCreateMovie, validationMovie } from '../helpers/validationCelebrate.js';

const router = new Router();

router.get('/', getMovies);
router.post('/', validationCreateMovie, createMovie);
router.delete('/:movieId', validationMovie, removeMovie);

export default router;
