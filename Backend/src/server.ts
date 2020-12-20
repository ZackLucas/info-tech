import "./util/module-alias";
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';

import User from './controller/User';

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const user = new User();
        this.addControllers(user);
    }

    public getApp(): Application {
        return this.app;
    }
}