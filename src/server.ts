// import express from 'express';
// import { json } from 'body-parser';
// import cors from 'cors';
// import userRouter from './routes/UsersMessgae';

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.use(json());
// app.use(cors());

// app.use('/users', userRouter);

// app.get('/', (req, res) => {
//   res.status(200).json("I'm work");
// });

// app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));


import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import userRouter from './routes/UsersMessgae';

const app = express();
const basicRout = (enpoint: string) => `/.netlify/functions/server${enpoint}`;

app.use(cors());

app.get(basicRout('/'), (req, res) => {
  res.status(200).json("I'm work");
});

app.use(basicRout('/users'), userRouter);

export const handler = serverless(app);
