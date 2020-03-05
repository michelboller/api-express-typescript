import { Request, Response } from 'express'
import EmailService from '../Services/EmailService'

const users = [{ user: 'Michel', email: 'you@example.com' }]

export default {
    async index(req: Request, res: Response) {
        res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()
        emailService.sendMail(
            {
                to: {
                    name: 'Michel',
                    email: 'you@example.com'
                },
                message: {
                    subject: 'Curso',
                    body: 'Bem-vindo'
                }
            })
        return res.send('ok')
    }

}
