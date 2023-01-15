import express from 'express';
import mongoose from 'mongoose';

const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/bitfilmsdb';
const app = express();

app.use(express.json());

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
