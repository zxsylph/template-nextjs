'use client'

// import { useContext } from 'react'
import { useContext } from 'preact/hooks'
import { effect } from '@preact/signals-react'

import { AppContext } from '@/app/signal/SignalPage'
import { TestContext } from '@/app/signal/SignalPage'

const Test = () => {
  console.log('render test')

  const { completed, tests } = useContext(TestContext)

  effect(() => {
    console.log('test', tests.value)
  })

  return (
    <div>
      <div>test</div>
      <div>{tests.value.length}</div>
      <div>{completed.value}</div>
    </div>
  )
}

export default Test
