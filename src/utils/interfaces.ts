export interface Command {
    description: string
    names: string[]
    callback?: () => any
    redirect?: string
}