import { ExternalApiRevoRepository } from "../../../../../src/modules/revo/infrastructure/repositories/externalApiRevo.repository"

import { API_DATA_ROOMS_WITH_TABLES_RESULT } from "../../__mocks__/ApiDataRoomResult"
import { FOODLUS_ZONE_MODEL } from "../../__mocks__/FoodlusZoneModel"

// Mocking the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                data: API_DATA_ROOMS_WITH_TABLES_RESULT
            })
    })
) as any

describe("ExternalApiRevoRepository", () => {
    let repository: ExternalApiRevoRepository

    beforeEach(() => {
        repository = new ExternalApiRevoRepository()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("should fetch Revo tables and map to FoodlusZoneModel", async () => {
        const result = await repository.getRevoTables()

        expect(result).toEqual(FOODLUS_ZONE_MODEL)
    })
})
