if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutas from "./routes/index";
import "./connection/index";
class Aplication {
  PORT_RANDOM = process.env.PORT ||5600;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  config() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true })); //form
    this.app.use(
      cors({
        //origin: "http://localhost:3000",//localhost:3000", // allow the server to accept requests from a single source
        //origin: "*", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        //credentials: true // allow session cookie from browser to pass through
      })
    );
  }
  routes() {
    this.app.use("/", rutas);
  }
  start() {
    this.app.listen(this.PORT_RANDOM, () => {
      console.log(`Run server in  http://localhost:${this.PORT_RANDOM} :)`);
    });
  }
}
new Aplication().start();
