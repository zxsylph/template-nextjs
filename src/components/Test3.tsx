'use client'

import Test2 from '@/components/Test2'
import { memo } from 'react'

const Test3 = () => {
  console.log('Test3')

  return (
    <div>
      <div>Test 3</div>
      <Test2></Test2>
    </div>
  )
}

// Test3.displayName = 'Test3'
export default Test3
