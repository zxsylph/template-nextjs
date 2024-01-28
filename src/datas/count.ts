import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const countAtom = atom<number>(0)
countAtom.debugLabel = 'countAtom'

const doubleCountAtom = atom<number>((get) => get(countAtom) * 2)
doubleCountAtom.debugLabel = 'doubleCountAtom'

const countAtomWithStorage = atomWithStorage<number>('count', 0)
countAtomWithStorage.debugLabel = 'countAtomWithStorage'

const doubleCountAtomWithStorage = atom<number>(
  (get) => get(countAtomWithStorage) * 2
)
doubleCountAtomWithStorage.debugLabel = 'doubleCountAtomWithStorage'

export {
  countAtom,
  countAtomWithStorage,
  doubleCountAtom,
  doubleCountAtomWithStorage
}
