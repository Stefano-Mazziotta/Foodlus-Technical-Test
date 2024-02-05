// import { NotFoundException } from "@/helpers"
import type { Request, Response, NextFunction } from "express"
export const globalErrorHandler = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
): void => {
    const statusCode: number = err.statusCode ? err.statusCode : 500

    const resBody = {
        statusCode,
        message: err.message
    }

    res.status(statusCode).json(resBody)
}
