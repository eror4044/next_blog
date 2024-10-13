import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
