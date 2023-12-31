import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import routes from './route';
import dotenv from 'dotenv-safe';
import { initializePassport } from '@middlewares';
const app: Application = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(initializePassport());
routes(app);
export default app;
