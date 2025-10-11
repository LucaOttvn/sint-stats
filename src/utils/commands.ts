import { Command } from "./interfaces";

export const commands: Command[] = [
    {
        description: 'Go back to the previous page',
        names: ['go back', 'gb'],
        redirect: 'back'
    },
    {
        description: 'Go to home',
        names: ['go home', 'gh'],
        redirect: '/home'
    },
    {
        description: 'Go to stats legend',
        names: ['go legend', 'gle'],
        redirect: '/home/legend'
    },
    {
        description: 'Go to characters stats',
        names: ['go stats', 'gs'],
        redirect: '/home/characters'
    },
    {
        description: 'Go to lore',
        names: ['go lore', 'glo'],
        redirect: '/home/lore'
    },
]