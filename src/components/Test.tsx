'use client'

import { effect, useSignal } from '@preact/signals-react'

import TestState from '@/states/TestState'
import { useEffect, useMemo, useState } from 'react'
const { completed, tests } = TestState

console.log('test', completed.value)
effect(() => {
  console.log('test effect', completed.value)
})

const Test = ({ a }) => {
  console.log('render test')
  const value = useMemo(() => completed.value, [completed.value])

  effect(() => {
    console.log('test component effect', completed.value)
  })

  return (
    <div>
      <div>test</div>
      <div>{tests.value.length}</div>
      <div>{completed.value}</div>
      <div>{value}</div>
      <div>{a.value}</div>
    </div>
  )
}

export default Test
