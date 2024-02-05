import { RevoRepository } from "../../domain/revo.repository"
import { FoodlusZoneModel } from "../../domain/zone"

export class MemoryRevoRepository implements RevoRepository {
    private data: FoodlusZoneModel[] = [
        {
            name: "name-zone",
            serviceLocations: [
                {
                    code: 111,
                    name: "location-1",
                    zoneId: "uuid-0123-0344",
                    zoneName: "zone1"
                },
                {
                    code: 222,
                    name: "location-2",
                    zoneId: "uuid-1234-1455",
                    zoneName: "zone-2"
                },
                {
                    code: 333,
                    name: "location-3",
                    zoneId: "uuid-2345-2566",
                    zoneName: "zone-3"
                }
            ]
        }
    ]

    constructor() {}

    async getRevoTables(): Promise<FoodlusZoneModel[] | null> {
        return this.data
    }
}
