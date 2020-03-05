import { Request, Response } from 'express'
import EmailService from '../Services/EmailService'

const users = [{ user: 'Michel', email: 'michelboller1@gmail.com' }]

export default {
    async index(req: Request, res: Response) {
        res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()
        emailService.sendMail(
            {
                to: {
                    name: 'MIXEU',
                    email: 'michel@gmail.com'
                },
                message: {
                    subject: 'Curso',
                    body: 'Bem-vindo'
                }
            })
        return res.send('ok')
    }

}