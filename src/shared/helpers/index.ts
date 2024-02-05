// export { NotFoundException } from "./exceptions/NotFoundException"
export { UnauthorizedError } from "./exceptions/UnauthorizedError"

export const HTTP_STATUS = {
    INTERNAL_SERVER_ERROR: {
        statusCode: 500,
        message: "Intenral server error"
    },
    UNAUTHOTRIZED: {
        statusCode: 401,
        message: "Not valid credentials"
    },
    NOT_FOUND: {
        statusCode: 404,
        message: "Not Found"
    },
    BAD_REQUEST: {
        statusCode: 400,
        message: "Bad Request"
    }
}
