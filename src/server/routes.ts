import revoRoutes from "../modules/revo/infrastructure/route/revo.route"
import authRoutes from "../modules/auth/infrastructure/routes/auth.route"

import { Router } from "express"

export const routes = Router()

routes.use(revoRoutes)
routes.use(authRoutes)

export default routes
