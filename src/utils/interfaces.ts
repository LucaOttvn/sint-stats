export interface Command {
    description: string
    names: string[]
    callback?: () => void
    redirect?: string
}