import express, { json } from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ifdteunq', 'ifdteunq', 'ojQaJwr9sfSe-XjwFCimNCldw2to2Hyj', {
  host: 'trumpet.db.elephantsql.com',
  dialect: 'postgres',
});

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize.sync()
  .then(() => {
    console.log('Table "users" created');
  })
  .catch((error) => {
    console.error('Error create error:', error);
  });

app.post('/users', (req, res) => {
  const { name, email, text } = req.body;

  User.create({ name, email, text })
    .then(() => {
      res.status(201).json({ message: 'User message added' });
    })
    .catch((error) => {
      console.error('User message added error:', error);
      res.status(500).json({ message: 'Server error' });
    });
});

app.get('/', (req, res) => {
    res.status(200).json("I`m work");
})

app.get('/users', (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error('Error collect user message:', error);
      res.status(500).json({ message: 'Server error' });
    });
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
