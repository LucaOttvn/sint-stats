import { Command } from "./interfaces";

export const commands: Command[] = [
    {
        description: 'Go back to the previous page',
        names: ['go back', 'gb'],
        redirect: 'back'
    },
    {
        description: 'Go to stats legend',
        names: ['go legend', 'gl'],
        redirect: '/home/legend'
    },
    {
        description: 'Go to characters stats',
        names: ['go stats', 'gs'],
        redirect: '/home/characters'
    },
]