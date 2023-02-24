import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import userRouter from './routes/UsersMessgae';

const router = express.Router();
export const app = express();

app.use(cors());

router.get('/', (req, res) => {
  res.status(200).json("I'm work");
});

router.use('/users', userRouter);

app.use('/.netlify/functions/server', router)

export const handler = serverless(app);
