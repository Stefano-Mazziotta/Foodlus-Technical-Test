import revoRoutes from "../modules/revo/infrastructure/route/revo.route"

import { Router } from "express"

export const routes = Router()

routes.use(revoRoutes)

export default routes
