import express from 'express';
import bodyParser from 'body-parser'
import router from "./routes.js";
import {logger} from './lib.js'


const app = express();

app.use(bodyParser.json())
app.use(logger);
app.use("/", express.static("./client"));
app.use("/dictionary", router)

export default app;