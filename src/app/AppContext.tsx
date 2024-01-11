'use client'

import { createContext } from 'preact'

import AppState from '@/states/AppState'
import TestState from '@/states/TestState'
import { AppStateType } from '@/types/AppStateType'
import { TestStateType } from '@/types/TestStateType'

const AppContext = createContext<AppStateType>(AppState)

const AppProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  // @ts-ignore
  return <AppContext.Provider value={AppState}>{children}</AppContext.Provider>
}

export { AppProvider }
