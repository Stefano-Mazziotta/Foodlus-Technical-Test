import { AllRevoTablesSearcher } from "../../../../../src/modules/revo/application/SerchAll/AllRevoTablesSearcher"
import { RevoRepository } from "../../../../../src/modules/revo/domain/revo.repository"
import { FOODLUS_ZONE_MODEL } from "../../__mocks__/FoodlusZoneModel"

// Mock the RevoRepository
const mockRevoRepository: jest.Mocked<RevoRepository> = {
    getRevoTables: jest.fn()
}

describe("AllRevoTablesSearcher", () => {
    let searcher: AllRevoTablesSearcher

    beforeEach(() => {
        searcher = new AllRevoTablesSearcher(mockRevoRepository)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("should search all Revo tables", async () => {
        // Mock the getRevoTables method to return a resolved promise with the mockTables
        mockRevoRepository.getRevoTables.mockResolvedValue(FOODLUS_ZONE_MODEL)

        const result = await searcher.searchAll()

        expect(result).toEqual(FOODLUS_ZONE_MODEL)

        // Ensure that getRevoTables was called
        expect(mockRevoRepository.getRevoTables).toHaveBeenCalled()
    })
})
