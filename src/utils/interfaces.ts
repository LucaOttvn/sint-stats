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
    value: number    
}

export interface Character {
    name: string
    stats: CharacterStat[]
}

export interface CharacterStat {
    statId: number
    value: number
}