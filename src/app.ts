import express from "express";
import http from "http";
import * as routes from "./routes/index";


// Create server instance
const app: express.Express = express();
const server = http.createServer(app);


// General middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use("/api/welcome", routes.welcomeRoute);
app.use("/api/", routes.welcomeRoute);



export default server;

