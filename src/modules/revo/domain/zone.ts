import { FoodlusTableModel } from "./tables"

export interface FoodlusZoneModel {
    name: string
    serviceLocations: FoodlusTableModel[]
}
