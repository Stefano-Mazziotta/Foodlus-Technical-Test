import { Request, Response } from "express"
import { SearchAllTables } from "../../application/SerchAll/search-all-tables"

export class SearchAllTablesController {
    constructor(private readonly searchAllTables: SearchAllTables) {}

    getAllTables = async (request: Request, response: Response) => {
        try {
            const tables = await this.searchAllTables.searchAll()
            response.send({ tables })
        } catch (error) {
            console.error("Error in getAllTables:", error)
            response.status(500).send({ error: "Internal Server Error" })
        }
    }
}
