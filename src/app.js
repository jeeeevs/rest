import express from 'express';
import logger from 'morgan';

import indexRouter from './routes/home';
import usersRouter from './routes/users';

const app = express();

app.use(logger('dev'));
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
