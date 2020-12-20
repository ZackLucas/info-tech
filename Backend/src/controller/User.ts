import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('User')
export default class User {
    @Get("/signup")
    public register(_req: Request, res: Response): void {
        res.send('ok');
    }
}
