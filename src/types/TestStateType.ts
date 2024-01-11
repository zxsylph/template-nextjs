import { Signal } from '@preact/signals-react'

type TestStateType = {
  tests: Signal<string[]>
  completed: Signal<number>
}

export type { TestStateType }
