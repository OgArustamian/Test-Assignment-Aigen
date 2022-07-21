/* eslint-disable max-len */
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const documents = require('./db_mock/documents');

const app = express();
const PORT = 3001;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/documents', (req, res) => {
  try {
    if (req.body.id) {
      const requestedDocs = documents.filter((doc) => doc.id === +req.body.id);
      res.json(requestedDocs);
    } else {
      const requestedDocs = documents.filter((doc) => (doc.title === req.body.title) || (doc.createdAt === req.body.date));
      res.json(requestedDocs);
    }
  } catch (err) {
    res.send('Ошибка на сервере');
  }
});

app.listen(PORT, () => {
  console.log('server started on port ', PORT);
});

module.exports = app;
