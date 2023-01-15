import express from 'express';
import mongoose from 'mongoose';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import appRouter from './routes/index.js';
import handleErrors from './middlewares/handleErrors.js';
import { RATE_LIMIT } from './utils/constants.js';
import { errorLogger, requestLogger } from './middlewares/logger.js';

const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/bitfilmsdb';
const app = express();

app.use(requestLogger);

app.use(helmet());
app.use(RATE_LIMIT);
app.use(cookieParser());
app.use(express.json());

app.use(appRouter);

app.use(errorLogger);
app.use(errors());
app.use(handleErrors);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`SERVER WORKS!!! at port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

startApp();
