import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const countAtom = atom(0)
countAtom.debugLabel = 'countAtom'
console.log('countAtom', countAtom)
const countAtomWithStorage = atomWithStorage('count', 0)
countAtomWithStorage.debugLabel = 'countAtomWithStorage'

export { countAtom, countAtomWithStorage }
