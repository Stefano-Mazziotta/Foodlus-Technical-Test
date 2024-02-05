import { SearchAllTables } from "../../../../../src/modules/revo/application/SerchAll/search-all-tables"
import { RevoRepository } from "../../../../../src/modules/revo/domain/revo.repository"
import { FOODLUS_ZONE_MODEL } from "../../__mocks__/foodlus-zone-model"

// Mock the RevoRepository
const mockRevoRepository: jest.Mocked<RevoRepository> = {
    getRevoTables: jest.fn()
}

describe("AllRevoTablesSearcher", () => {
    let searcher: SearchAllTables

    beforeEach(() => {
        searcher = new SearchAllTables(mockRevoRepository)
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
