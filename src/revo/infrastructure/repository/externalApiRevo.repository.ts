import { SERVER_CONFIG } from "../../../shared/config"
import { RevoRepository } from "../../domain/revo.repository"
import { FoodlusZoneModel } from "../../domain/zone"

export class ExternalApiRevoRepository implements RevoRepository {
    async getRevoTables(): Promise<FoodlusZoneModel | null> {
        const response = await fetch(SERVER_CONFIG.REVO.BASE_URL)
        const tables = await response.json()

        const foodlusZoneModel: FoodlusZoneModel = {
            name: "",
            serviceLocations: []
        }

        return tables
    }
}
