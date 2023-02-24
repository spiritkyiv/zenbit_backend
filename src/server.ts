import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import userRouter from './routes/UsersMessgae';

const app = express();
const basicRout = (endpoint: string): string => `/.netlify/functions/server${endpoint}`;

app.use(cors());

app.get(basicRout('/'), (req, res) => {
  res.status(200).json("I'm work");
});

app.use(basicRout('/users'), userRouter);

export const handler = serverless(app);
