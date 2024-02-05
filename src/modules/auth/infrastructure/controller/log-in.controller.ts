import { Request, Response } from "express"
import { LogIn } from "../../application/log-in"
import { User } from "../../domain/auth-user"

export class LogInController {
    constructor(private readonly logInUseCase: LogIn) {}

    logIn = async (request: Request, response: Response) => {
        try {
            const { body } = request
            const { username, email, password } = body

            if (!username || !email || !password) {
                response.status(400).send({ error: "Bad Request" })
                return
            }

            const user: User = {
                username,
                email,
                password
            }

            const userValidated = await this.logInUseCase.logIn(user)
            response.send({ userValidated })
        } catch (error) {
            console.error("Error in getAllTables:", error)
            response.status(500).send({ error: "Internal Server Error" })
        }
    }
}
