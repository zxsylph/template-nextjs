'use client'

import Link from 'next/link'
import { atom, useAtom } from 'jotai'
import { DevTools } from 'jotai-devtools'

import Test from '@/components/Test'

import { countAtom, countAtomWithStorage } from '@/datas/count'

function JotaiPage() {
  const [count, setCounter] = useAtom(countAtomWithStorage)
  const onClick = () => setCounter((prev) => prev + 1)

  return (
    <>
      <div>Jotai Page</div>
      <div>
        <h1>{count}</h1>
        <button onClick={onClick}>Click</button>
      </div>
      <Test></Test>
      <div>
        <Link href="jotai2">Jotai 2</Link>
      </div>
      <DevTools />
    </>
  )
}

export default JotaiPage
