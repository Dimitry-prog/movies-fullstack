import express from 'express';
import mongoose from 'mongoose';
import appRouter from './routes/index.js';
import handleErrors from './middlewares/handleErrors.js';

const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/bitfilmsdb';
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '63c40944f242c799a0d9fd42',
  };

  next();
});

app.use(appRouter);

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
