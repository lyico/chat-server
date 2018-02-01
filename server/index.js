import express from 'express';
import apiRouter from './api';
import query from './common/mysql/db';

let app = express();

app.get('/', (req, res) => {
  res.send('hello word123!');
});

// 使用路由
app.use('/api', apiRouter);

global.query = query;

app.listen(3000, () => {
  console.log(3000);
});

export default app;