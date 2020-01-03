import express from "express";
import Server from "./server/Server";
import DriverManager from "./services/DriverManager";

const app = express();
const port = 8080;

DriverManager.Instance.connect();
new Server(app, port);
