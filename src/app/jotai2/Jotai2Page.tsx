'use client'

import Link from 'next/link'
import { atom, useAtom } from 'jotai'

import Test from '@/components/Test'

import { countAtom } from '@/datas/count'

function Jotai2Page() {
  const [count, setCounter] = useAtom(countAtom)
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
        <Link href="jotai">Jotai</Link>
      </div>
    </>
  )
}

export default Jotai2Page
