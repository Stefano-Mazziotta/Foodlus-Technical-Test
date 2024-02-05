import { ILogIn } from "../../domain/auth-login"
import { User } from "../../domain/auth-user"
import { AuthRepository } from "../../domain/auth.repository"
import jwt from "jsonwebtoken"

import bcrypt from "bcrypt"
import { SERVER_CONFIG } from "../../../../shared/config"
export class MemoryAuthRepository implements AuthRepository {
    private validUsers: User[] = [
        {
            username: SERVER_CONFIG.SERVER.VALID_USER_USERNAME,
            email: SERVER_CONFIG.SERVER.VALID_USER_EMAIL,
            password: SERVER_CONFIG.SERVER.VALID_USER_PASSWORD
        }
    ]

    constructor() {
        this.hashPassword().then()
    }

    logIn(user: User): Promise<ILogIn | null> {
        return new Promise(async (resolve, reject) => {
            const { username, password, email } = user

            const userValidated = this.validUsers.find(
                (validUser) =>
                    validUser.username == username && validUser.email == email
            )

            const passwordCorrect = !userValidated
                ? false
                : await bcrypt.compare(password, userValidated.password)

            if (!passwordCorrect) {
                resolve(null)
            }
            const token = jwt.sign({ username }, SERVER_CONFIG.JWT.SECRET_TOKEN)

            resolve({ username, token })
        })
    }

    private async hashPassword() {
        const { password } = this.validUsers[0]
        this.validUsers[0].password = await bcrypt.hash(password, 10)
    }
}
