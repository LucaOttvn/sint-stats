export interface Command {
    description: string
    names: string[]
    callback?: () => void
    redirect?: string
}

export interface Stat {
    name: string
    description: string
    value: number    
}