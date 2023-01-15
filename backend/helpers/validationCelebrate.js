import { celebrate, Joi } from 'celebrate';

export const validationSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().trim().min(2).max(30)
      .required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
  }),
});

export const validationSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
  }),
});

export const validationUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().trim().min(2).max(30)
      .required(),
    email: Joi.string().trim().email().required(),
  }),
});

export const validationCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().trim().required(),
    director: Joi.string().trim().required(),
    duration: Joi.number().required(),
    year: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    image: Joi.string().trim().uri().required(),
    trailerLink: Joi.string().trim().uri().required(),
    thumbnail: Joi.string().trim().uri().required(),
    movieId: Joi.string().trim().required(),
    nameRU: Joi.string().trim().required(),
    nameEN: Joi.string().trim().required(),
  }),
});

export const validationMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
});
