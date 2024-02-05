import { Router } from "express"
import { MemoryRevoRepository } from "../repository/memoryRevo.repository"
import { AllRevoTablesSearcher } from "../../application/SerchAll/AllRevoTablesSearcher"
import { RevoController } from "../controller/revo.controller"
// import Revo

const route = Router()

const memoryRevoRepository = new MemoryRevoRepository()
const allRevoTablesSearcher = new AllRevoTablesSearcher(memoryRevoRepository)
const revoController = new RevoController(allRevoTablesSearcher)
route.get("/tables", revoController.getAllTables)

export default route
