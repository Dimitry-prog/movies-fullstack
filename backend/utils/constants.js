import rateLimit from 'express-rate-limit';

export const RATE_LIMIT = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

export const HTTP_STATUS_CODE = {
  created: 201,
  ok: 200,
};

export const ALLOWED_CORS = [
  'localhost:3000',
  'localhost:5000',
  'http://localhost:3000',
  'https://localhost:3000',
  'http://localhost:5000',
  'https://localhost:5000',
];

export const CORS_OPTIONS = {
  origin: ALLOWED_CORS,
  optionsSuccessStatus: 200,
  credentials: true,
};
