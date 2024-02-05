import { ILogIn } from "./auth-login"
import { User } from "./auth-user"

export interface AuthRepository {
    logIn(user: User): Promise<ILogIn | null>
}
