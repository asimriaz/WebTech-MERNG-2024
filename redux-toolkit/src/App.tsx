import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { store } from './redux/store'


function App() {
  return (
    <>
      <Counter />
    </>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
