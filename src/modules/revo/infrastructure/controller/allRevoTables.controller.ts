import { Request, Response } from "express"
import { AllRevoTablesSearcher } from "../../application/SerchAll/AllRevoTablesSearcher"

export class AllRevoTablesController {
    constructor(
        private readonly allRevoTablesSearcher: AllRevoTablesSearcher
    ) {}

    getAllTables = async (request: Request, response: Response) => {
        try {
            const tables = await this.allRevoTablesSearcher.searchAll()
            response.send({ tables })
        } catch (error) {
            console.error("Error in getAllTables:", error)
            response.status(500).send({ error: "Internal Server Error" })
        }
    }
}
