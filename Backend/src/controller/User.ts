import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('user')
export default class User {
    @Get("signup")
    public register(_req: Request, res: Response): void {
        res.send({
            name: 'Fulano de Teste',
            phone: '(11) 91234-5678',
            token: 'token generated valid for 1 day',
        });
    }
}
