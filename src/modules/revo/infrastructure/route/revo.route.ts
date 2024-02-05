import { Router } from "express"
import { ExternalApiRevoRepository } from "../repositories/externalApiRevo.repository"
import { AllRevoTablesSearcher } from "../../application/SerchAll/AllRevoTablesSearcher"
import { AllRevoTablesController } from "../controller/allRevoTables.controller"
// import Revo

const route = Router()

const externalApiRevoRepository = new ExternalApiRevoRepository()
const allRevoTablesSearcher = new AllRevoTablesSearcher(
    externalApiRevoRepository
)
const revoController = new AllRevoTablesController(allRevoTablesSearcher)
route.get("/tables", revoController.getAllTables)

export default route
