'use client'

import Test from '@/components/Test'
import Test3 from '@/components/Test3'
import { useAppDispatch, useAppSelector } from '@/datas/appStore'
import {
  decrement,
  increment,
  incrementByAmount
} from '@/datas/features/counter/counterSlice'

const ReduxPage = () => {
  console.log('ReduxPage')

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>Redux Page</div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            dispatch(increment())
          }}
        >
          add
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >
          sub
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(incrementByAmount(10))
          }}
        >
          Add 10
        </button>
      </div>
      <Test3></Test3>
    </div>
  )
}

export default ReduxPage
