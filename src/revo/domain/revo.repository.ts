import { FoodlusZoneModel } from "./zone"

export interface RevoRepository {
    getRevoTables(): Promise<FoodlusZoneModel | null>
}
