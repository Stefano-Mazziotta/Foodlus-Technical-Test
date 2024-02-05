import { SERVER_CONFIG } from "../../../../shared/config"
import { RevoRepository } from "../../domain/revo.repository"
import { FoodlusTableModel } from "../../domain/tables"
import { FoodlusZoneModel } from "../../domain/zone"
import { ResultRoomsWithTables } from "../interfaces/external-api-result.interface"

export class ExternalApiRevoRepository implements RevoRepository {
    private endpoints = {
        GET_REVO_TABLES: "/rooms?withTables=true"
    }

    public async getRevoTables(): Promise<FoodlusZoneModel[] | null> {
        const response = await this.fetchRevoApi({
            endpoint: this.endpoints.GET_REVO_TABLES
        })

        const result: ResultRoomsWithTables = await response.json()
        const { data } = result

        const zonesWithServiceLocations = data.map(({ id, name, tables }) => {
            const serviceLocations: FoodlusTableModel[] = tables?.map(
                (table) => {
                    return {
                        name: table.name,
                        code: table.id,
                        zoneId: id,
                        zoneName: name
                    }
                }
            )
            const zone: FoodlusZoneModel = {
                name,
                serviceLocations
            }

            return zone
        })

        return zonesWithServiceLocations
    }

    private async fetchRevoApi({ endpoint }: { endpoint: string }) {
        const headers = {
            "Content-Type": "application/json",
            tenant: SERVER_CONFIG.REVO.TENANT,
            Authorization: `Bearer ${SERVER_CONFIG.REVO.AUTH_TOKEN}`,
            ["client-token"]: SERVER_CONFIG.REVO.CLIENT_TOKEN
        }

        const response = await fetch(
            `${SERVER_CONFIG.REVO.BASE_URL}${endpoint}`,
            {
                headers
            }
        )
        return response
    }
}
