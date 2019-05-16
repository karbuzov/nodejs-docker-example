import path from 'path'
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import session from 'client-sessions';

import router from './routes'
import cors from "cors";

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(compression());
app.use(logger('dev'));
app.use(helmet());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3001'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  cookieName: 'session',
  secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  // secure: true,
  // ephemeral: true
}));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

export default app;
