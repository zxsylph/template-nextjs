import { atom, useAtom, useAtomValue } from 'jotai'

import { countAtom, doubleCountAtom } from '@/datas/count'

function Test() {
  const [count, setCounter] = useAtom(countAtom)
  const doubleCount = useAtomValue(doubleCountAtom)
  const onClick = () => setCounter((prev) => prev + 1)

  return (
    <>
      <div>Test</div>
      <div>
        <h1>{count}</h1>
        <h2>{doubleCount}</h2>
        <button onClick={onClick}>Click</button>
      </div>
    </>
  )
}

export default Test
