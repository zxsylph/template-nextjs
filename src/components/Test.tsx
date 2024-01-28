import { atom, useAtom } from 'jotai'

import { countAtom } from '@/datas/count'

function Test() {
  const [count, setCounter] = useAtom(countAtom)
  const onClick = () => setCounter((prev) => prev + 1)

  return (
    <>
      <div>Test</div>
      <div>
        <h1>{count}</h1>
        <button onClick={onClick}>Click</button>
      </div>
    </>
  )
}

export default Test
