import { User } from "../domain/auth-user"
import { AuthRepository } from "../domain/auth.repository"
import { ILogIn } from "../domain/auth-login"

export class LogIn {
    constructor(private readonly authRepository: AuthRepository) {}

    public logIn = async (user: User): Promise<ILogIn | null> => {
        const userAuthenticated = this.authRepository.logIn(user)
        // validaciones
        return userAuthenticated
    }
}
