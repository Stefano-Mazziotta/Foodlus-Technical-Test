import { RevoRepository } from "../../domain/revo.repository"

export class SearchAllTables {
    constructor(private readonly revoRepository: RevoRepository) {}

    public searchAll = async () => {
        const tables = await this.revoRepository.getRevoTables()

        return tables
    }
}
