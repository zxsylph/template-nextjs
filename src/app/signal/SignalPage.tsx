'use client'

// import { createContext } from 'react'
import { createContext } from 'preact'
// import { useContext } from "preact/hooks"

import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import { AppStateType } from '@/types/AppStateType'
import { TestStateType } from '@/types/TestStateType'
import { createAppState } from '@/states/AppState'
import { createTestState } from '@/states/TestState'

const AppState = createAppState()
const TestState = createTestState()
export const AppContext = createContext<AppStateType>(AppState)
export const TestContext = createContext<TestStateType>(TestState)

const SignalPage = () => {
  return (
    <div suppressHydrationWarning>
      {/* @ts-ignore */}
      <TestContext.Provider value={TestState}>
        <div>SignalPage</div>
        <Test></Test>
        <Test2></Test2>
      </TestContext.Provider>
    </div>
  )
}

export default SignalPage
