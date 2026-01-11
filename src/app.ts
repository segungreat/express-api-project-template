import express from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import {createStream} from "rotating-file-stream"; // For rotating log file daily
import path from "path";
// setup the dotenv configuration
import dotenv from "dotenv";
// use default .env file on development
dotenv.config();

import * as middlewares from "./middlewares/index";
import * as routes from "./routes/index";


// Create server instance
const app: express.Express = express();
const server = http.createServer(app);


// General middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Morgan for logging
// I prefer rotating the log file daily
// create a rotating write stream
const accessLogStream = createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
});
// Uncomment this line to use combined logging
// app.use(morgan('combined', { stream: accessLogStream }));
// Uncomment this line to use custom logging
app.use(morgan(":date[clf] | :method :url :status :response-time ms", {
  stream: accessLogStream 
}));

// Custom middlewares
app.use(middlewares.common.setBaseUrl);
app.use(middlewares.common.bodyLogger);

// Routes
app.use("/api/welcome", routes.welcomeRoute);
app.use("/api/", routes.welcomeRoute);


// 404 page handler 
app.use(middlewares.common.notFoundPage)
// Error handler middleware
app.use(middlewares.common.errorHandler)



export default server;

