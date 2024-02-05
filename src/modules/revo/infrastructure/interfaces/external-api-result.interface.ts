export interface ResultRoomsWithTables {
    current_page: number
    data: Data[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: null
    path: string
    per_page: number
    prev_page_url: null
    to: number
    total: number
}

export interface Data {
    id: number
    name: string
    order: number
    active: number
    tables: Table[]
}

export interface Table {
    id: number
    name: string
    x: number
    y: number
    width: number
    height: number
    baseX: number
    baseY: number
    isJoined: number
    joined_with_id: null
    baseWidth: number
    baseHeight: number
    color: string
    type_id: number
    room_id: number
    price_id: number
}

export interface Link {
    url: null | string
    label: string
    active: boolean
}
