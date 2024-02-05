import { HTTP_STATUS } from ".."

export class UnauthorizedError extends Error {
    public readonly statusCode: number
    public readonly message: string

    constructor() {
        super()
        this.statusCode = HTTP_STATUS.UNAUTHOTRIZED.statusCode
        this.message = HTTP_STATUS.UNAUTHOTRIZED.message
    }
}
