import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const countAtom = atom(0)
console.log('countAtom', countAtom)
const countAtomWithStorage = atomWithStorage('count', 0)

export { countAtom, countAtomWithStorage }
