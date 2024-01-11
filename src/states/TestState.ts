import { computed, signal } from '@preact/signals-react'

import { TestStateType } from '@/types/TestStateType'

const createTestState = (): TestStateType => {
  const tests = signal<string[]>([])

  const completed = computed<number>(() => {
    return tests.value.length
  })

  return { tests, completed }
}

export default createTestState()
export { createTestState }
