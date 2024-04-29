import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HolidayProvider } from "./context/HolidayContext"
import Schedule from './components/Schedule'

function App() {


  return (
    <>
      <HolidayProvider>
        <Schedule />
      </HolidayProvider>
    </>
  )
}

export default App
