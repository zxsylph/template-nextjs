'use client'

import { effect } from '@preact/signals-react'

import TestState from '@/states/TestState'
const { completed, tests } = TestState

effect(() => {
  console.log('test4 effect', completed.value)
})

function Test4({ a }) {
  console.log('test 4')

  const handleClick2 = () => {
    console.log('handle click 2')
    tests.value = [...tests.value, `test ${completed.value}`]
    a.value = a.value + 1
  }

  return (
    <div>
      <div>test 4</div>
      <div>
        <button onClick={handleClick2}>add 2</button>
      </div>
      <div>{completed.value}</div>
    </div>
  )
}

export default Test4
