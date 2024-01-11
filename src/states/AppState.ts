import testState from '@/states/TestState'
import { AppStateType } from '@/types/AppStateType'

const createAppState = (): AppStateType => {
  return {
    testState
  }
}

export default createAppState()
export { createAppState }
