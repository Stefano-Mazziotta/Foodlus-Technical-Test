import revoRoutes from "../modules/revo/infrastructure/route/revo.route"
import authRoutes from "../modules/auth/infrastructure/routes/auth.route"

import { Router } from "express"
import { userExtractor } from "../modules/auth/infrastructure/middlewares/user-extractor"

export const routes = Router()

routes.use(authRoutes)
routes.use(userExtractor, revoRoutes)

export default routes
