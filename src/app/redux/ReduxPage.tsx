'use client'

import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '@/datas/appStore'
import {
  decrement,
  increment,
  incrementByAmount
} from '@/datas/features/counter/counterSlice'

const ReduxPage = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

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
    </div>
  )
}

export default ReduxPage
