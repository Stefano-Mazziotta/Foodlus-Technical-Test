import { createServerApp } from "./app"
import { startServer } from "./server"
;(() => {
    try {
        const app = createServerApp()
        startServer(app)

        process
            .on("unhandledRejection", (reason, p) => {
                console.error(reason, "Unhandled Rejection at Promise", p)
            })
            .on("uncaughtException", (err) => {
                console.error(err, "Uncaught Exception thrown")
                process.exit(1)
            })
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
})()
