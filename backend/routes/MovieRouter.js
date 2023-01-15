import Router from 'express';
import { createMovie, getMovies, removeMovie } from '../controllers/MovieController.js';

const router = new Router();

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:movieId', removeMovie);

export default router;
