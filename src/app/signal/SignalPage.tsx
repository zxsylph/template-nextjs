'use client'

import { useSignal } from '@preact/signals-react'

import Test from '@/components/Test'
import Test2 from '@/components/Test2'

const SignalPage = () => {
  const a = useSignal(10)

  return (
    <div>
      <div>SignalPage</div>
      <Test a={a.value}></Test>
      <Test2 a={a.value}></Test2>
      <div>{a}</div>
      <button
        onClick={() => {
          a.value++
        }}
      >
        add
      </button>
    </div>
  )
}

export default SignalPage
