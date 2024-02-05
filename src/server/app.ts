import express, { type Application } from "express"
import cors from "cors"
import routes from "./routes"

import { SERVER_CONFIG } from "../shared/config"
import { globalErrorHandler } from "./middlewares/errorHandler"

const { PREFIX, SIZE_LIMIT } = SERVER_CONFIG.SERVER

export const createServerApp = (): Application => {
    const app = express()

    app.use(cors())
    app.use(express.json({ limit: SIZE_LIMIT }))
    app.use(
        express.urlencoded({
            extended: true,
            limit: SIZE_LIMIT
        })
    )

    app.use(PREFIX, routes)
    app.use(globalErrorHandler)

    return app
}
