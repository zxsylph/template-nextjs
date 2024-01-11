'use client'

import { effect } from '@preact/signals-react'
// import { useContext } from 'react'
import { useContext } from 'preact/hooks'

import { AppContext } from '@/app/signal/SignalPage'

function Test4() {
  console.log('test 4')

  const {
    testState: { completed, tests }
  } = useContext(AppContext)

  const handleClick2 = () => {
    console.log('handle click 2')
    tests.value = [...tests.value, `test ${completed.value}`]
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
