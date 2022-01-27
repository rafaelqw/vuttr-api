import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { routes } from "./routes";
import { AppError } from "./errors/AppError";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";


import "./database";

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

app.use((err: Error, _request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3000, () => console.log('Server started on port 3000!'));
