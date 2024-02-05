import jwt from "jsonwebtoken"
import { SERVER_CONFIG } from "../../../../shared/config"
import { NextFunction, Response, Request } from "express"
import { UnauthorizedError } from "../../../../shared/helpers"

export function userExtractor(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const authorization = request.headers.authorization || null

    if (!authorization || !authorization.toLowerCase().startsWith("bearer")) {
        throw new UnauthorizedError()
    }

    const token = authorization.substring(7)

    const decodedToken = jwt.verify(token, SERVER_CONFIG.JWT.SECRET_TOKEN)

    if (!token || !decodedToken) {
        throw new UnauthorizedError()
    }

    next()
}
