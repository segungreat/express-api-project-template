import express from "express";
import http from "http";
import cors from "cors";
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

// Custom middlewares
app.use(middlewares.common.setBaseUrl)

// Routes
app.use("/api/welcome", routes.welcomeRoute);
app.use("/api/", routes.welcomeRoute);



export default server;

