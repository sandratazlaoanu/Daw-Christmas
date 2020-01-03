import session from "express-session";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import passport from "passport";
import cors from "cors";
import "../config/passport";

export default class Server {
    private port: number;
    private app: express.Application;

    public constructor(app: express.Application, port: number) {
        this.port = port;
        this.app = app;

        this.configApp();
        this.setRoutes();

        this.startServer();
    }

    private startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server started at http://localhost:${this.port}!`);
        });
    }

    private configApp() {
        this.app.use(cors());
        // parse application/x-www-form-urlencoded from body
        this.app.use(bodyParser.json());

        //parse application.json from body
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(session({ secret: "mysecret" }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    private setRoutes() {
        routes(this.app, passport);
    }
}
