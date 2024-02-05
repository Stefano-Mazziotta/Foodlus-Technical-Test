import { ExternalApiRevoRepository } from "../../../../../src/modules/revo/infrastructure/repositories/external-api-revo.repository"

import { API_DATA_ROOMS_WITH_TABLES_RESULT } from "../../__mocks__/api-data-rooms-result"
import { FOODLUS_ZONE_MODEL } from "../../__mocks__/foodlus-zone-model"

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
