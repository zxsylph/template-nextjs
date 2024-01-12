'use client'

import { Provider } from 'react-redux'

import { appStore } from '@/datas/appStore'

const AppProvider = ({ children }) => {
  return <Provider store={appStore}>{children}</Provider>
}

export default AppProvider
