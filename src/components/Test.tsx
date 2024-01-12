'use client'

import { useAppSelector } from '@/datas/appStore'

const Test = () => {
  console.log('Test')

  const count = useAppSelector((state) => state.counter.value)

  return (
    <div>
      <div>Test</div>
      <div>{count}</div>
    </div>
  )
}

export default Test
