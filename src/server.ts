import express from 'express';
import { json } from 'body-parser';
import userRouter from './routes/UsersMessgae';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(json());

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.status(200).json("I'm work");
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
