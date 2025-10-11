export interface Command {
    description: string
    names: string[]
    callback?: () => void
    redirect?: string
}

export interface Stat {
    id: number
    name: string
    description: string
}

export interface Character {
    name: string
    stats: CharacterStat[]
}

export interface CharacterStat {
    statId: number
    value: number
}

export interface Lore {
    seasons: Season[]
}

export interface Season {
    id: number
    name: string
    episodes: Episode[]
}

export interface Episode {
    id: number
    name: string
    text: string
}

export interface Folder {
    id: number
    name: string
    files?: File[]
}

export interface File {
    id: number
    name: string
}