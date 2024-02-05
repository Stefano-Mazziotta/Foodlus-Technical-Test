import { Router } from "express"
import { ExternalApiRevoRepository } from "../repositories/external-api-revo.repository"
import { SearchAllTables } from "../../application/SerchAll/search-all-tables"
import { SearchAllTablesController } from "../controller/search-all-tables.controller"
// import Revo

const route = Router()

const externalApiRevoRepository = new ExternalApiRevoRepository()
const allRevoTablesSearcher = new SearchAllTables(externalApiRevoRepository)
const revoController = new SearchAllTablesController(allRevoTablesSearcher)
route.get("/tables", revoController.getAllTables)

export default route
