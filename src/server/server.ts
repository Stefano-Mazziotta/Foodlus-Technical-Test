import type { Application } from "express"
import { SERVER_CONFIG } from "../shared/config"

export const startServer = (app: Application) => {
    const httpServer = app

    httpServer.listen({ port: SERVER_CONFIG.APP.PORT }, () => {
        process.stdout.write(
            `[TECHNICAL-TEST][FOODLUS-API][${
                SERVER_CONFIG.APP.ENV
            }] Started on: ${new Date()}\n`
        )
        process.stdout.write(
            `The server is running at: http://${SERVER_CONFIG.APP.HOST}:${SERVER_CONFIG.APP.PORT}\n`
        )
    })
}
